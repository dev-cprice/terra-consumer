import React from 'react';
import { I18nProvider } from 'terra-i18n';
import IconOutlineQuestionMark from 'terra-consumer-icon/lib/icon/IconOutlineQuestionMark';
import Messages from '../../../src/i18n/translations/messages.json';
import NavHelp from '../../../src/components/nav-help/NavHelp';


const helpItems = [
  {
    text: 'Technical Questions',
    uri: 'http://localhost:8080/',
    icon: (<IconOutlineQuestionMark height={16} width={16} />),
    children: [{
      text: 'Need help using this portal or need to report an issue? Contact the support team at 123-xxx-xxxx',
      uri: 'http://localhost:8080/',
    }],
  },
  {
    text: 'Get Support ID',
    uri: 'http://localhost:8080/',
    icon: (<IconOutlineQuestionMark height={16} width={16} />),
    children: [],
  },
];

describe('NavHelp button with pop/modal', () => {
  // Snapshot Tests
  it('should render a button with IconInfo,label and a pop/modal not opened', () => {
    const wrapper = shallow(<I18nProvider locale="en-US" messages={Messages['en-US']}>
      <NavHelp help={helpItems} id="nav-help-button" /></I18nProvider>);
    expect(wrapper).toMatchSnapshot();
  });
});