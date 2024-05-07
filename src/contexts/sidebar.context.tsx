import { createContext, useCallback, useContext, useState } from 'react'

type SidebarContextProps = {
  isOpen: boolean
  onIsOpen: (value: boolean) => void
}

const SidebarContext = createContext<SidebarContextProps>(
  {} as SidebarContextProps
)

const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)

  const onIsOpen = useCallback((value: boolean) => {
    setIsOpen(value)
  }, [])
  return (
    <SidebarContext.Provider value={{ isOpen, onIsOpen }}>
      {children}
    </SidebarContext.Provider>
  )
}

export type IuseSidebarParams = Parameters<typeof useSidebar>
export type IuseSidebarReturn = ReturnType<typeof useSidebar>

const useSidebar = () => {
  return useContext(SidebarContext)
}

export { SidebarProvider, useSidebar }
