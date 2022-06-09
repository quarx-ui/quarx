import { addons } from '@storybook/addons'
import { create } from '@storybook/theming'
import Logo from './logo.svg'
import {} from './favicon.svg'

const theme = create({
    base: 'light',

    brandTitle: 'QuarX',
    brandImage: Logo,
})

addons.setConfig({
    theme,
})
