import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchInlineSnapshot(`
      <main>
        <h2>
          react avançado
        </h2>
      </main>
    `) //vai criar um novo arquivo
    // snapshoot clonando todos os testes feitos
  })
})
