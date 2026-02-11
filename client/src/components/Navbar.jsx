import React, { useContext, useState, useEffect } from 'react'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import logo from '../assets/logo bapenda.jpg'; // Pastikan path logo benar
// Import Icon (Opsional: Jika pakai Heroicons/Lucide, atau pakai SVG manual di bawah)

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { token, setToken } = useContext(AppContext)

    const [showMenu, setShowMenu] = useState(false) // State Mobile Menu
    const [isScrolled, setIsScrolled] = useState(false) // State Scroll

    // 1. DATA MENU (Agar kodingan rapi)
    const navLinks = [
        { path: '/', label: 'BERANDA' },
        { path: '/services', label: 'LAYANAN' },
        { path: '/news', label: 'BERITA' },
        { path: '/downloads', label: 'UNDUHAN' },
        { path: '/about', label: 'TENTANG KAMI' },
    ];

    // 2. EFEK SCROLL (Navbar berubah saat discroll)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // 3. LOGOUT FUNCTION
    const logout = () => {
        setToken(false)
        localStorage.removeItem('token')
        navigate('/login')
        setShowMenu(false)
    }

    return (
        // CONTAINER UTAMA (Sticky + Transition)
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
            isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/90 backdrop-blur-md py-5 border-b border-gray-200'
        }`}>
            <div className='container mx-auto px-4 md:px-10 flex items-center justify-between text-sm'>
                
                {/* --- LOGO --- */}
                <div onClick={() => navigate('/')} className='cursor-pointer flex items-center gap-2'>
                    {/* Mengatur ukuran logo agar responsif */}
                    <img src={logo} alt="logo bapenda" className='h-10 w-auto object-contain' />
                    <span className={`font-bold text-lg hidden md:block ${isScrolled ? 'text-blue-900' : 'text-gray-700'}`}>
                        BAPENDA
                    </span>
                </div>

                {/* --- DESKTOP MENU (Hidden di Mobile) --- */}
                <ul className='hidden lg:flex items-center gap-8 font-medium'>
                    {navLinks.map((link) => (
                        <NavLink 
                            key={link.path} 
                            to={link.path}
                            className={({ isActive }) => `
                                transition-all duration-300 relative group
                                ${isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-600"}
                            `}
                        >
                            {link.label}
                            {/* Garis Bawah Animasi */}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                        </NavLink>
                    ))}
                </ul>

                {/* --- KANAN: LOGIN / PROFILE & HAMBURGER --- */}
                <div className='flex items-center gap-4'>
                    
                    {/* 1. Logika User Login */}
                    {token ? (
                        <div className='flex items-center gap-2 cursor-pointer group relative'>
                            {/* Avatar */}
                            <div className='w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold border border-blue-200'>
                                U
                            </div>
                            {/* Icon Panah Kecil */}
                            <svg className='w-4 h-4 text-gray-500 group-hover:rotate-180 transition-transform' fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>

                            {/* Dropdown Menu Profile */}
                            <div className='absolute top-0 right-0 pt-12 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20'>
                                <div className='bg-white rounded-xl flex flex-col gap-2 p-4 shadow-xl border border-gray-100 w-48'>
                                    <p onClick={() => navigate('/my-profile')} className='hover:bg-gray-50 p-2 rounded cursor-pointer text-gray-700 font-medium'>Profil Saya</p>
                                    <p onClick={() => navigate('/my-invoices')} className='hover:bg-gray-50 p-2 rounded cursor-pointer text-gray-700 font-medium'>Tagihan Pajak</p>
                                    <hr className='border-gray-100' />
                                    <p onClick={logout} className='hover:bg-red-50 p-2 rounded cursor-pointer text-red-500 font-medium'>Logout</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <button 
                            onClick={() => navigate('/login')} 
                            className='hidden md:block bg-blue-600 text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-blue-700 hover:shadow-lg transition-all transform hover:-translate-y-0.5'
                        >
                            Masuk / Daftar
                        </button>
                    )}

                    {/* 2. Tombol Hamburger (Mobile Only) */}
                    <button onClick={() => setShowMenu(true)} className='lg:hidden text-gray-700 focus:outline-none'>
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </button>
                </div>

                {/* --- MOBILE MENU SIDEBAR (Slide in) --- */}
                <div className={`fixed top-0 right-0 bottom-0 bg-white z-[60] transition-all duration-300 shadow-2xl overflow-hidden ${showMenu ? 'w-3/4 sm:w-1/2' : 'w-0'}`}>
                    <div className='flex flex-col h-full'>
                        {/* Mobile Header */}
                        <div className='flex items-center justify-between p-5 border-b border-gray-100'>
                            <span className='font-bold text-lg text-blue-900'>Menu</span>
                            <button onClick={() => setShowMenu(false)} className='text-gray-500 hover:text-red-500'>
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            </button>
                        </div>

                        {/* Mobile Links */}
                        <ul className='flex flex-col p-5 gap-4 text-gray-700 font-medium'>
                            {navLinks.map((link) => (
                                <NavLink 
                                    key={link.path}
                                    to={link.path} 
                                    onClick={() => setShowMenu(false)} // Tutup menu saat diklik
                                    className={({ isActive }) => `py-2 px-3 rounded-lg transition-colors ${isActive ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
                                >
                                    {link.label}
                                </NavLink>
                            ))}
                            
                            {/* Mobile Login Button (Jika belum login) */}
                            {!token && (
                                <button 
                                    onClick={() => { navigate('/login'); setShowMenu(false); }} 
                                    className='mt-4 bg-blue-600 text-white py-3 rounded-lg w-full font-semibold shadow-md'
                                >
                                    Masuk Akun
                                </button>
                            )}
                        </ul>
                    </div>
                </div>

                {/* --- OVERLAY GELAP (Saat Mobile Menu Buka) --- */}
                {showMenu && (
                    <div 
                        onClick={() => setShowMenu(false)} 
                        className="fixed inset-0 bg-black/50 z-[55] lg:hidden backdrop-blur-sm"
                    ></div>
                )}

            </div>
        </nav>
    )
}

export default Navbar