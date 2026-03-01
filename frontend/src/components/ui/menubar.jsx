import * as React from "react"
import * as MenubarPrimitive from "@radix-ui/react-menubar"
import { ChevronRight } from "lucide-react"

// Utilitaire de secours pour remplacer "cn" si votre projet a un souci d'alias
const cn = (...classes) => classes.filter(Boolean).join(" ");

const Menubar = React.forwardRef(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn("flex h-12 items-center space-x-1 bg-transparent p-1", className)}
    {...props} />
))
Menubar.displayName = "Menubar"

const MenubarMenu = MenubarPrimitive.Menu
const MenubarGroup = MenubarPrimitive.Group
const MenubarPortal = MenubarPrimitive.Portal

const MenubarTrigger = React.forwardRef(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex cursor-pointer select-none items-center rounded-sm px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white outline-none hover:text-blue-400 data-[state=open]:text-blue-400 transition-colors",
      className
    )}
    {...props} />
))
MenubarTrigger.displayName = "MenubarTrigger"

const MenubarContent = React.forwardRef(({ className, align = "start", alignOffset = -4, sideOffset = 8, ...props }, ref) => (
  <MenubarPrimitive.Portal>
    <MenubarPrimitive.Content
      ref={ref}
      align={align}
      alignOffset={alignOffset}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[12rem] overflow-hidden border border-gray-800 bg-[#0A192F] p-1 text-white shadow-2xl",
        className
      )}
      {...props} />
  </MenubarPrimitive.Portal>
))
MenubarContent.displayName = "MenubarContent"

const MenubarItem = React.forwardRef(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-pointer select-none items-center rounded-sm px-4 py-3 text-[10px] uppercase tracking-widest outline-none focus:bg-blue-600 focus:text-white",
      inset && "pl-8",
      className
    )}
    {...props} />
))
MenubarItem.displayName = "MenubarItem"

export { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarGroup, MenubarPortal }
