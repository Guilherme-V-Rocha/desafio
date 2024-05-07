import { Home } from '@/app/home'
import Provider from '@/util/providers'
import { render } from '@testing-library/react'

describe('.', () => {
  const view = render(
    <Provider>
      <Home />
    </Provider>
  )

  it('.', () => {})
})
