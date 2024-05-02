import { StyledLayout } from './styles';
import Navbar from '../../organisms/navbar/Navbar';
import Sidebar from '../../organisms/sidebar/Sidebar';

function Layout({ children }) {
  return(
    <StyledLayout>
      <div>
        <Navbar />
      </div>
      <div className='layout-header'>
        <div className='sidebar-left'>
          <Sidebar />
        </div>
        <div className='main-content-right'>
          {children}
        </div>
      </div>
    </StyledLayout>
  );
}

export default Layout;