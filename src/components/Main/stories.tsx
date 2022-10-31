import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Default',
    description: 'Default'
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />
//posso manter com o valor default que ja vem originalmente do componente
//para isso sem adicionar um arg default

export const Default: Story = (args) => <Main {...args} />
// posso definir args como default para os testes

export const Secondary: Story = (args) => <Main {...args} />
//posso sobrescrever args default
Secondary.args = {
  title: 'title sobrescrito',
  description: 'description sobrescrito'
}
