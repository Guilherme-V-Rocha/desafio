import Provider from '@/util/providers'
import { render, screen } from '@testing-library/react'
import { Footer } from './footer'

describe('Footer', () => {
  it('should render', () => {
    const view = render(
      <Provider>
        <Footer />
      </Provider>
    )

    expect(view).toBeTruthy()
  })

  it('should text match', () => {
    const view = render(
      <Provider>
        <Footer />
      </Provider>
    )

    expect(screen.getByText('')).toBeInTheDocument()
  })

  it('should validate the typograph', () => {
    const view = render(
      <Provider>
        <Footer />
      </Provider>
    )

    const typograph = screen.getByText(/direitos reservados/i)

    screen.debug(typograph)

    expect(typograph).toHaveStyle({
      fontWeight: '400',
      fontSize: '0.75rem',
    })
  })

  it('should be a snapshot', () => {
    const view = render(
      <Provider>
        <Footer />
      </Provider>
    )

    expect(view).toMatchSnapshot()
  })
})
