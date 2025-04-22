 // ------------------------------
// 📱 Mobile Sidebar Functionality
// ------------------------------
document.addEventListener('DOMContentLoaded', () => {
    // Create mobile navbar dynamically
    const mobileNavbar = document.createElement('div');
    mobileNavbar.className = 'mobile-navbar';
    mobileNavbar.innerHTML = `
        <div class="mobile-nav-items">
            <a href="desboard.html" class="mobile-nav-item ">
                <i class="fas fa-home"></i><span>Home</span>
            </a>
            <a href="orders.html" class="mobile-nav-item">
                <i class="fas fa-calendar-alt"></i><span>Orders</span>
            </a>
            <a href="#" class="mobile-nav-item ">
                <i class="fas fa-wallet"></i><span>Earnings</span>
            </a>
            <a href="#" class="mobile-nav-item menu-toggle-btn">
                <i class="fas fa-bars"></i><span>Menu</span>
            </a>
        </div>
    `;
    document.body.appendChild(mobileNavbar);

    // Add menu toggle to header
    const headerLeft = document.querySelector('.header-left');
    const menuToggle = document.createElement('div');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    headerLeft.prepend(menuToggle);

    const sidebar = document.querySelector('.sidebar');

    const toggleSidebar = () => sidebar.classList.toggle('active');

    // Toggle sidebar events
    menuToggle.addEventListener('click', toggleSidebar);
    document.querySelector('.menu-toggle-btn').addEventListener('click', toggleSidebar);

    // Close sidebar when clicking outside
    document.addEventListener('click', (event) => {
        const insideSidebar = sidebar.contains(event.target);
        const clickedToggle = menuToggle.contains(event.target) || 
                              document.querySelector('.menu-toggle-btn').contains(event.target);
        if (!insideSidebar && !clickedToggle && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        }
    });
});

 