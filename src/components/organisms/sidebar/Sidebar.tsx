import './sidebar.scss';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="title">
        {/*<h4>Hello World!</h4>*/}
      </div>
      <ul className="list">
        <li><a href="#">Dashboard</a></li>
        <li><a href='#'>Users</a></li>
        <li><a href='#'>Profile</a></li>
        <li><a href='#'>Announcements</a></li>
        <li><a href='#'>About</a></li>
      </ul>
    </div>
  )
}

export default Sidebar;
