import React, { Component, Suspense } from 'react';
import { withTranslation } from 'react-i18next';

class LegacyComponentClass extends Component {
  render() {
    const { t } = this.props;

    return (
      <h1>{t('Welcome to React')}</h1>
    )
  }
}
const MyComponent = withTranslation()(LegacyComponentClass)

export default LegacyComponentClass