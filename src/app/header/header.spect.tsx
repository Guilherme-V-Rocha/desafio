import { makeCartContext, makeUseSidebar } from '@/__tests__/contexts'
import { colors } from '@/styles/colors'
import { theme } from '@/styles/theme'
import Provider from '@/util/providers'
import { fireEvent, render, screen } from '@testing-library/react'
import { Header } from '../header'

describe('Header', () => {
  it('should render', () => {
    const view = render(
      <Provider>
        <Header />
      </Provider>
    )

    expect(view).toBeTruthy()
  })

  it('should have a text MKS', () => {
    render(
      <Provider>
        <Header />
      </Provider>
    )

    expect(screen.getByText(/MKS/i)).toBeInTheDocument()
    expect(screen.getByText(/Sistemas/i)).toBeInTheDocument()
  })

  it('shoudl validate the typography MKS style', () => {
    render(
      <Provider>
        <Header />
      </Provider>
    )

    const typograph = screen.getByText(/MKS/i)

    expect(typograph).toHaveStyle({
      fontWeight: theme.fontWeight.semiBold,
      fontSize: theme.fontSize.xxxLarge,
      color: colors.white,
    })
  })

  it('shoudl validate the typography Sistemas style', () => {
    render(
      <Provider>
        <Header />
      </Provider>
    )

    const typograph = screen.getByText(/Sistemas/i)

    expect(typograph).toHaveStyle({
      fontWeight: theme.fontWeight.light,
      fontSize: theme.fontSize.medium,
      color: colors.white,
    })
  })

  it('should have a button', () => {
    render(
      <Provider>
        <Header />
      </Provider>
    )

    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('should have a HeaderGroup', () => {
    render(
      <Provider>
        <Header />
      </Provider>
    )

    const headerGroup = screen.getByTestId('header-group')

    expect(headerGroup).toBeInTheDocument()
  })

  it('should click the button', () => {
    const mockSidebar = makeUseSidebar()

    render(
      <Provider>
        <Header useSidebarHook={() => mockSidebar} />
      </Provider>
    )

    const button = screen.getByRole('button')

    expect(button).toBeInTheDocument()

    fireEvent.click(button)

    expect(mockSidebar.onIsOpen).toHaveBeenCalled()

    expect(mockSidebar.onIsOpen).toHaveBeenCalledWith(true)
  })

  it('should validate the img button', () => {
    render(
      <Provider>
        <Header />
      </Provider>
    )
    const buttonImg = screen.getByRole('img')

    expect(buttonImg).toBeInTheDocument()

    expect(buttonImg).toHaveAttribute(
      'src',
      '/_next/image?url=%2Fimg.jpg&w=48&q=75'
    )
    expect(buttonImg).toHaveAttribute('alt', 'cart icon')
    expect(buttonImg).toHaveStyle({
      height: 18,
      width: 19,
      color: 'transparent',
    })
  })

  it('should render the cart item quantity', () => {
    const cartContext = makeCartContext()

    render(
      <Provider>
        <Header
          useSidebarHook={makeUseSidebar}
          useListProductsHook={cartContext}
        />
      </Provider>
    )

    const cartButton = screen.getByRole('button')

    expect(cartButton).toBeInTheDocument()

    expect(cartButton).toHaveTextContent('2')
  })
})
