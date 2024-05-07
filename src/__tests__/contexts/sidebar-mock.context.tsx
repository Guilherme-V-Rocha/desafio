import { IuseSidebarParams, IuseSidebarReturn } from '@/contexts'

export const makeUseSidebar = (props?: IuseSidebarParams) => {
  const mock: IuseSidebarReturn = {
    isOpen: false,
    onIsOpen: jest.fn(),
    ...props,
  }

  return mock
}
