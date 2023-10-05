import { Space } from 'antd';
import './App.css';
import AppHeader from './components/AppHeader';

import SideMenu from './components/SideMenu';
import PageContent from './components/PageContent';
import AppFooter from './components/AppFooter';

function App() {
  return (
    <div className='App'>
      <AppHeader />
      <Space className='SideMenuAndPageContent'>
        <SideMenu />
        <PageContent />
      </Space>
      <AppFooter />
    </div>
  )
}

export default App;
