import React, { useContext, useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import logo from '../assets/logo bapenda.png';

const Navbar = () => {
    const navigate = useNavigate();
    const { token, setToken } = useContext(AppContext)

    const [showMenu, setShowMenu] = useState(false) 
    const [isVisible, setIsVisible] = useState(true) 
    const [lastScrollY, setLastScrollY] = useState(0) 
    const [isScrolled, setIsScrolled] = useState(false) 

    const navLinks = [
        { path: '/', label: 'BERANDA' },
        { path: '/services', label: 'LAYANAN' },
        { path: '/news', label: 'BERITA' },
        { path: '/downloads', label: 'UNDUHAN' },
        { path: '/about', label: 'TENTANG KAMI' },
    ];

    useEffect(() => {
        const controlNavbar = () => {
            const currentScrollY = window.scrollY;

            // Efek background
            setIsScrolled(currentScrollY > 10);

            // Efek Show/Hide
            if (currentScrollY > lastScrollY && currentScrollY > 80) {
                setIsVisible(false);
            } else {
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
        <>
            <nav className={`sticky top-0 left-0 w-full z-[100] transition-all duration-500 ease-in-out ${
                isVisible ? 'translate-y-0' : '-translate-y-full'
            } ${
                isScrolled ? 'bg-white shadow-md py-1' : 'bg-white/95 backdrop-blur-md py-2'
            }`}>
                <div className='container mx-auto px-4 md:px-6 lg:px-10 flex items-center justify-between'>
                    
                    {/* --- LOGO --- */}
                    <div onClick={() => { navigate('/'); window.scrollTo(0,0) }} className='cursor-pointer flex items-center shrink-0'>
                        <img src={logo} alt="logo bapenda" className='h-10 md:h-12 lg:h-14 w-auto object-contain' />
                    </div>

                    {/* --- DESKTOP MENU --- */}
                    <ul className='hidden lg:flex items-center gap-6 xl:gap-8 font-semibold text-xs xl:text-sm'>
                        {navLinks.map((link) => (
                            <NavLink 
                                key={link.path} 
                                to={link.path}
                                className={({ isActive }) => `
                                    transition-all duration-300 relative group py-2
                                    ${isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-600"}
                                `}
                            >
                                {link.label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                            </NavLink>
                        ))}
                    </ul>

                    {/* --- KANAN: LOGIN / PROFILE --- */}
                    <div className='flex items-center gap-3 md:gap-4'>
                        {token ? (
                            <div className='flex items-center gap-2 cursor-pointer group relative'>
                                <div className='w-8 h-8 md:w-9 md:h-9 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-sm'>
                                    U
                                </div>
                                <svg className='w-4 h-4 text-gray-500 group-hover:rotate-180 transition-transform hidden sm:block' fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>

                                {/* Dropdown Desktop */}
                                <div className='absolute top-full right-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-48'>
                                    <div className='bg-white rounded-xl flex flex-col p-2 shadow-2xl border border-gray-100'>
                                        <p onClick={() => navigate('/my-profile')} className='hover:bg-blue-50 p-3 rounded-lg cursor-pointer text-gray-700 text-sm transition-colors'>Profil Saya</p>
                                        <p onClick={() => navigate('/my-invoices')} className='hover:bg-blue-50 p-3 rounded-lg cursor-pointer text-gray-700 text-sm transition-colors'>Tagihan Pajak</p>
                                        <hr className='my-1 border-gray-100' />
                                        <p onClick={logout} className='hover:bg-red-50 p-3 rounded-lg cursor-pointer text-red-500 text-sm font-semibold transition-colors'>Logout</p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <button 
                                onClick={() => navigate('/login')} 
                                className='hidden sm:block bg-blue-600 text-white px-5 lg:px-7 py-2 lg:py-2.5 rounded-full font-bold text-xs lg:text-sm hover:bg-blue-700 hover:shadow-lg transition-all active:scale-95'
                            >
                                MASUK AKUN
                            </button>
                        )}

                        {/* Toggle Mobile Menu */}
                        <button onClick={() => setShowMenu(true)} className='lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors'>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* --- MOBILE SIDEBAR --- */}
            <div className={`fixed top-0 right-0 bottom-0 bg-white z-[200] transition-all duration-500 shadow-[-10px_0_30px_rgba(0,0,0,0.1)] ${showMenu ? 'w-[280px]' : 'w-0'}`}>
                <div className='flex flex-col h-full overflow-y-auto'>
                    <div className='flex items-center justify-between p-6 border-b border-gray-50'>
                        <span className='font-bold text-blue-900'>MENU</span>
                        <button onClick={() => setShowMenu(false)} className='p-2 hover:bg-gray-100 rounded-full transition-colors'>
                            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>
                    </div>
                    
                    <ul className='flex flex-col p-4 gap-2'>
                        {navLinks.map((link) => (
                            <NavLink 
                                key={link.path}
                                to={link.path} 
                                onClick={() => { setShowMenu(false); window.scrollTo(0,0); }}
                                className={({ isActive }) => `
                                    py-3.5 px-5 rounded-xl text-sm font-semibold transition-all
                                    ${isActive ? 'bg-blue-600 text-white shadow-md' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'}
                                `}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </ul>

                    {/* Tombol Login Mobile (Tampil jika belum login) */}
                    {!token && (
                        <div className='mt-auto p-6 border-t border-gray-50'>
                            <button 
                                onClick={() => { navigate('/login'); setShowMenu(false); }}
                                className='w-full bg-blue-600 text-white py-3 rounded-xl font-bold text-sm shadow-md'
                            >
                                MASUK AKUN
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* --- OVERLAY MOBILE --- */}
            <div 
                onClick={() => setShowMenu(false)} 
                className={`fixed inset-0 bg-black/50 z-[150] lg:hidden backdrop-blur-sm transition-opacity duration-300 ${showMenu ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            ></div>
        </>
    )
}

export default Navbar