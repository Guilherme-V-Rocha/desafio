import makeUseProducts from '@/__tests__/hooks/use-products'
import Provider from '@/util/providers'
import { render, screen } from '@testing-library/react'
import { Home } from './home'

describe('Home', () => {
  it('should render', () => {
    const mockUseProducts = makeUseProducts()
    const view = render(
      <Provider>
        <Home useProductsHook={mockUseProducts} />
      </Provider>
    )

    expect(view).toBeTruthy()
  })

  it('should be a snapshot', () => {
    const mockUseProducts = makeUseProducts()
    const view = render(
      <Provider>
        <Home useProductsHook={mockUseProducts} />
      </Provider>
    )

    expect(view).toMatchSnapshot()
  })

  it('should have a text product name', async () => {
    const mockUseProducts = makeUseProducts()

    render(
      <Provider>
        <Home useProductsHook={mockUseProducts} />
      </Provider>
    )

    await screen.findAllByTestId(`product-name`).then((elements) => {
      elements.forEach((element) => {
        expect(element).toBeInTheDocument()
      })
    })
  })

  it('should have a text product description', async () => {
    const mockUseProducts = makeUseProducts()

    render(
      <Provider>
        <Home useProductsHook={mockUseProducts} />
      </Provider>
    )

    await screen.findAllByTestId(`product-description`).then((elements) => {
      elements.forEach((element) => {
        expect(element).toBeInTheDocument()
      })
    })
  })

  it('should validate the photo in product card', async () => {
    const mockUseProducts = makeUseProducts()

    render(
      <Provider>
        <Home useProductsHook={mockUseProducts} />
      </Provider>
    )

    await screen.findAllByTestId(`product-photo`).then((elements) => {
      elements.forEach((element) => {
        expect(element).toBeInTheDocument()
      })
    })
  })

  it('should have a button', async () => {
    const mockUseProducts = makeUseProducts()

    render(
      <Provider>
        <Home useProductsHook={mockUseProducts} />
      </Provider>
    )

    const button = await screen.findAllByRole('button')

    button.forEach((element) => {
      expect(element).toBeInTheDocument()
    })
  })

  it('should validate the img button', async () => {
    const mockUseProducts = makeUseProducts()

    render(
      <Provider>
        <Home useProductsHook={mockUseProducts} />
      </Provider>
    )

    await screen.findAllByTestId('button-icon').then((element) =>
      element.forEach((element) => {
        expect(element).toBeInTheDocument()
      })
    )
  })
})
