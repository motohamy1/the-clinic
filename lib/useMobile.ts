'use client'

import { useCallback, useEffect, useMemo, useState } from "react"

type ViewVariant = "mobile" | "tablet" | "desktop"
type Orientation = "portrait" | "landscape"

export type ResponsiveValues<T> = {
  mobile: T
  tablet?: T
  desktop: T
}

export type UseMobileOptions = {
  mobileBreakpoint?: number
  tabletBreakpoint?: number
  columns?: Partial<Record<ViewVariant, number>>
  spacing?: Partial<Record<ViewVariant, number>>
}

export type MobileLayout = {
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
  width: number
  height: number
  orientation: Orientation
  variant: ViewVariant
  ready: boolean
  columns: number
  spacing: number
  select: <T>(values: ResponsiveValues<T>) => T
}

const DEFAULT_MOBILE_BREAKPOINT = 768
const DEFAULT_TABLET_BREAKPOINT = 1024

const DEFAULT_COLUMNS: Record<ViewVariant, number> = {
  mobile: 1,
  tablet: 2,
  desktop: 3
}

const DEFAULT_SPACING: Record<ViewVariant, number> = {
  mobile: 16,
  tablet: 24,
  desktop: 32
}

export default function useMobile(options?: UseMobileOptions): MobileLayout {
  const mobileBreakpoint = options?.mobileBreakpoint ?? DEFAULT_MOBILE_BREAKPOINT
  const tabletBreakpoint = Math.max(
    mobileBreakpoint + 1,
    options?.tabletBreakpoint ?? DEFAULT_TABLET_BREAKPOINT
  )

  const columnsConfig = {
    mobile: options?.columns?.mobile ?? DEFAULT_COLUMNS.mobile,
    tablet: options?.columns?.tablet ?? DEFAULT_COLUMNS.tablet,
    desktop: options?.columns?.desktop ?? DEFAULT_COLUMNS.desktop
  }

  const spacingConfig = {
    mobile: options?.spacing?.mobile ?? DEFAULT_SPACING.mobile,
    tablet: options?.spacing?.tablet ?? DEFAULT_SPACING.tablet,
    desktop: options?.spacing?.desktop ?? DEFAULT_SPACING.desktop
  }

  const hasWindow = typeof window !== "undefined"

  const [dimensions, setDimensions] = useState(() => ({
    width: hasWindow ? window.innerWidth : 0,
    height: hasWindow ? window.innerHeight : 0
  }))

  useEffect(() => {
    if (!hasWindow) return
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    const handleVisibility = () => {
      if (document.visibilityState === "visible") handleResize()
    }

    handleResize()
    window.addEventListener("resize", handleResize, { passive: true })
    window.addEventListener("orientationchange", handleResize, { passive: true })
    document.addEventListener("visibilitychange", handleVisibility)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("orientationchange", handleResize)
      document.removeEventListener("visibilitychange", handleVisibility)
    }
  }, [hasWindow])

  const ready = hasWindow && (dimensions.width !== 0 || dimensions.height !== 0)
  const isMobile = ready ? dimensions.width < mobileBreakpoint : false
  const isTablet = ready ? dimensions.width >= mobileBreakpoint && dimensions.width < tabletBreakpoint : false
  const isDesktop = ready ? dimensions.width >= tabletBreakpoint : !ready
  const variant: ViewVariant = isMobile ? "mobile" : isTablet ? "tablet" : "desktop"
  const orientation: Orientation = ready && dimensions.width > dimensions.height ? "landscape" : "portrait"

  const select = useCallback(
    <T,>(values: ResponsiveValues<T>) => {
      if (!ready) return values.desktop
      if (isMobile) return values.mobile
      if (isTablet && values.tablet !== undefined) return values.tablet
      return values.desktop
    },
    [isMobile, isTablet, ready]
  )

  const columns = useMemo(
    () =>
      select({
        mobile: columnsConfig.mobile,
        tablet: columnsConfig.tablet,
        desktop: columnsConfig.desktop
      }),
    [columnsConfig.desktop, columnsConfig.mobile, columnsConfig.tablet, select]
  )

  const spacing = useMemo(
    () =>
      select({
        mobile: spacingConfig.mobile,
        tablet: spacingConfig.tablet,
        desktop: spacingConfig.desktop
      }),
    [select, spacingConfig.desktop, spacingConfig.mobile, spacingConfig.tablet]
  )

  return {
    isMobile,
    isTablet,
    isDesktop,
    width: dimensions.width,
    height: dimensions.height,
    orientation,
    variant,
    ready,
    columns,
    spacing,
    select
  }
}
