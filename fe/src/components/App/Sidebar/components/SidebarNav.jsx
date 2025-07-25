import {
  FiFileText,
  FiFrown,
  FiHome,
  FiImage,
  FiShield,
  FiTerminal,
  FiUsers
} from 'react-icons/fi';
import { useLocation } from 'react-router-dom';

import SidebarNavItem from './SidebarNavItem';

/**
 * Helper to check if a path matches current location
 * 
 * @param {string} path - Path to check
 * @param {string} pathname - Current location pathname
 * @param {boolean} exact - Whether match should be exact
 * @returns {boolean} Whether path is active
 */
const isPathActive = (path, pathname, exact = false) => {
  if (exact) {
    return path === pathname;
  }
  return pathname.startsWith(path);
};

/**
 * SidebarNav component for managing navigation structure
 */
const SidebarNav = () => {
  const location = useLocation();
  const { pathname } = location;
  
  return (
    <div className="py-4 flex-grow overflow-y-auto">
      <nav className="px-3 space-y-1">
        {/* Dashboard Link */}
        <SidebarNavItem 
          to="/admin/dashboard" 
          icon={<FiHome />} 
          label="Dashboard" 
          roleAccess={['admin']}
          isActive={isPathActive('/admin/dashboard', pathname, true)}
        />
        
        {/* Partnership Link */}
        <SidebarNavItem 
          to="/admin/partnership" 
          icon={<FiUsers />} 
          label="Partnership" 
          roleAccess={['admin']}
          isActive={isPathActive('/admin/partnership', pathname)}
        />
        
        {/* News Link */}
        <SidebarNavItem 
          to="/admin/news" 
          icon={<FiFileText />} 
          label="News" 
          roleAccess={['admin']}
          isActive={isPathActive('/admin/news', pathname)}
        />

        {/* TUKS Link */}
        <SidebarNavItem 
          to="/admin/tuks" 
          icon={<FiFileText />} 
          label="TUKS" 
          roleAccess={['admin']}
          isActive={isPathActive("/admin/tuks", pathname)}
        />

        {/* Gallery Link */}
        <SidebarNavItem 
          to="/admin/gallery" 
          icon={<FiImage />} 
          label="Gallery" 
          roleAccess={['admin']}
          isActive={isPathActive("/admin/gallery", pathname)}
        />

        {/* Assessor Link */}
        <SidebarNavItem 
          to="/admin/assessor" 
          icon={<FiUsers />} 
          label="Assessor" 
          roleAccess={['admin']}
          isActive={isPathActive("/admin/assessor", pathname)}
        />

        {/* Assessor Link */}
        <SidebarNavItem 
          to="/admin/struktur" 
          icon={<FiFrown />} 
          label="Struktural" 
          roleAccess={['admin']}
          isActive={isPathActive("/admin/struktur", pathname)}
        />

        {/* Instance Link */}
        <SidebarNavItem 
          to="/admin/instance" 
          icon={<FiShield />} 
          label="Instance" 
          roleAccess={['admin']}
          isActive={isPathActive("/admin/instance", pathname)}
        />

        {/* Metode Sertifikasi Link */}
        <SidebarNavItem 
          to="/admin/metode_sertifikasi" 
          icon={<FiTerminal />} 
          label="Metode" 
          roleAccess={['admin']}
          isActive={isPathActive("/admin/metode_sertifikasi", pathname)}
        />

        {/* Schema Link */}
        <SidebarNavItem 
          to="/admin/schema" 
          icon={<FiFileText />} 
          label="Schema" 
          roleAccess={['admin']}
          isActive={isPathActive("/admin/schema", pathname)}
        />

        {/* User Link */}
        <SidebarNavItem 
          to="/user/assessment" 
          icon={<FiFileText />} 
          label="Pengajuan" 
          roleAccess={['user']} 
          isActive={isPathActive("/user/assessment", pathname)}
        />

        {/* Assessee Link */}
        <SidebarNavItem 
          to="/app/assessee" 
          icon={<FiFileText />} 
          label="Assessee" postma
          roleAccess={['admin', 'user']}
          isActive={isPathActive("/app/assessee", pathname)}
        />

        <SidebarNavItem 
          to="/app/certificate" 
          icon={<FiFileText />} 
          label="Certificate" 
          roleAccess={['admin', 'user']}
          isActive={isPathActive("/app/certificate", pathname)}
        />
        
        {/* User Link */}
        <SidebarNavItem 
          to="/app/users" 
          icon={<FiFileText />} 
          label="User" 
          roleAccess={['admin']} 
          isActive={isPathActive("/app/users", pathname)}
        />
      </nav>
    </div>
  );
};

export default SidebarNav; 