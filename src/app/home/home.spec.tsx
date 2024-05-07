import Provider from '@/util/providers'
import { render } from '@testing-library/react'
import { Home } from './home'

describe('Home', () => {
  it('should render', () => {
    const view = render(
      <Provider>
        <Home />
      </Provider>
    )

    expect(view).toBeTruthy()
  })

  it('should be a snapshot', () => {
    const view = render(
      <Provider>
        <Home />
      </Provider>
    )

    expect(view).toMatchSnapshot()
  })
})
