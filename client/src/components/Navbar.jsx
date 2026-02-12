import React, { useContext, useState, useEffect } from 'react'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import logo from '../assets/logo bapenda.jpg';

const Navbar = () => {
    const navigate = useNavigate();
    const { token, setToken } = useContext(AppContext)

    const [showMenu, setShowMenu] = useState(false) 
    const [isVisible, setIsVisible] = useState(true) // Untuk menyembunyikan/menampilkan navbar
    const [lastScrollY, setLastScrollY] = useState(0) // Menyimpan posisi scroll terakhir
    const [isScrolled, setIsScrolled] = useState(false) // Untuk efek shadow/background putih

    const navLinks = [
        { path: '/', label: 'BERANDA' },
        { path: '/services', label: 'LAYANAN' },
        { path: '/news', label: 'BERITA' },
        { path: '/downloads', label: 'UNDUHAN' },
        { path: '/about', label: 'TENTANG KAMI' },
    ];

    // LOGIKA SMART SCROLL
    useEffect(() => {
        const controlNavbar = () => {
            const currentScrollY = window.scrollY;

            // 1. Efek background (isScrolled)
            if (currentScrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            // 2. Efek Show/Hide (isVisible)
            if (currentScrollY > lastScrollY && currentScrollY > 80) {
                // Jika scroll ke bawah dan sudah lewat 80px, sembunyikan
                setIsVisible(false);
            } else {
                // Jika scroll ke atas, munculkan
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', controlNavbar);
        return () => window.removeEventListener('scroll', controlNavbar);
    }, [lastScrollY]);

    const logout = () => {
        setToken(false)
        localStorage.removeItem('token')
        navigate('/login')
        setShowMenu(false)
    }

    return (
        // CONTAINER UTAMA dengan class 'transition-transform' dan 'translate-y'
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
            isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
            isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-md py-5'
        }`}>
            <div className='container mx-auto px-4 md:px-10 flex items-center justify-between text-sm'>
                
                {/* --- LOGO --- */}
                <div onClick={() => { navigate('/'); window.scrollTo(0,0) }} className='cursor-pointer flex items-center gap-2'>
                    <img src={logo} alt="logo bapenda" className='h-10 w-auto object-contain' />
                    <span className={`font-bold text-lg hidden md:block ${isScrolled ? 'text-blue-900' : 'text-gray-700'}`}>
                        BAPENDA
                    </span>
                </div>

                {/* --- DESKTOP MENU --- */}
                <ul className='hidden lg:flex items-center gap-8 font-medium'>
                    {navLinks.map((link) => (
                        <NavLink 
                            key={link.path} 
                            to={link.path}
                            className={({ isActive }) => `
                                transition-all duration-300 relative group
                                ${isActive ? "text-blue-600 font-bold" : "text-gray-600 hover:text-blue-600"}
                            `}
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                        </NavLink>
                    ))}
                </ul>

                {/* --- KANAN: LOGIN / PROFILE --- */}
                <div className='flex items-center gap-4'>
                    {token ? (
                        <div className='flex items-center gap-2 cursor-pointer group relative'>
                            <div className='w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold border border-blue-200'>
                                U
                            </div>
                            <svg className='w-4 h-4 text-gray-500 group-hover:rotate-180 transition-transform' fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>

                            <div className='absolute top-0 right-0 pt-12 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20'>
                                <div className='bg-white rounded-xl flex flex-col gap-2 p-4 shadow-xl border border-gray-100 w-48'>
                                    <p onClick={() => navigate('/my-profile')} className='hover:bg-gray-50 p-2 rounded cursor-pointer text-gray-700 font-medium transition-colors'>Profil Saya</p>
                                    <p onClick={() => navigate('/my-invoices')} className='hover:bg-gray-50 p-2 rounded cursor-pointer text-gray-700 font-medium transition-colors'>Tagihan Pajak</p>
                                    <hr className='border-gray-100' />
                                    <p onClick={logout} className='hover:bg-red-50 p-2 rounded cursor-pointer text-red-500 font-medium transition-colors'>Logout</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <button 
                            onClick={() => navigate('/login')} 
                            className='hidden md:block bg-blue-600 text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-blue-700 hover:shadow-lg transition-all transform hover:-translate-y-0.5'
                        >
                            Masuk Akun
                        </button>
                    )}

                    <button onClick={() => setShowMenu(true)} className='lg:hidden text-gray-700 focus:outline-none'>
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </button>
                </div>

                {/* --- MOBILE SIDEBAR --- */}
                <div className={`fixed top-0 right-0 bottom-0 bg-white z-[60] transition-all duration-300 shadow-2xl overflow-hidden ${showMenu ? 'w-3/4' : 'w-0'}`}>
                    <div className='flex flex-col h-full'>
                        <div className='flex items-center justify-between p-5 border-b border-gray-100'>
                            <span className='font-bold text-lg text-blue-900'>Menu Utama</span>
                            <button onClick={() => setShowMenu(false)} className='text-gray-500'>
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            </button>
                        </div>
                        <ul className='flex flex-col p-5 gap-4 text-gray-700 font-medium'>
                            {navLinks.map((link) => (
                                <NavLink 
                                    key={link.path}
                                    to={link.path} 
                                    onClick={() => { setShowMenu(false); window.scrollTo(0,0); }}
                                    className={({ isActive }) => `py-3 px-4 rounded-xl transition-colors ${isActive ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
                                >
                                    {link.label}
                                </NavLink>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* --- OVERLAY MOBILE --- */}
                {showMenu && (
                    <div onClick={() => setShowMenu(false)} className="fixed inset-0 bg-black/40 z-[55] lg:hidden backdrop-blur-sm"></div>
                )}
            </div>
        </nav>
    )
}

export default Navbar