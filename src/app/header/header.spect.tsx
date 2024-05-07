import Provider from '@/util/providers'
import { render, screen } from '@testing-library/react'
import { Header } from './header'

describe('Header', () => {
  it('should render', () => {})

  it('should have a button', () => {
    const view = render(
      <Provider>
        <Header />
      </Provider>
    )

    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('should have HeaderGroup', () => {
    const headerGroup = screen.getByTestId('header-group')

    expect(headerGroup).toBeInTheDocument()
  })

  it('should click the button', () => {
    const mockSidebar = 'a'
    render(
      <Provider>
        <Header />
      </Provider>
    )

    const button = screen.getByRole('button')
  })
})
