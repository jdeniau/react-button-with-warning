import React, { PureComponent } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import  ButtonWithWarning from '../src';

storiesOf('Button', module)
  .add('with warning', () => (
    <ButtonWithWarning onClick={action('onClick')}>
      Buy an expensive thing
    </ButtonWithWarning>
  ))
;
