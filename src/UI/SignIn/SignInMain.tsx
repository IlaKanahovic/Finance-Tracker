import { FaBookOpen } from 'react-icons/fa';
import { SignInForm } from './SignInForm';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuthStore } from '../../store/authStore';
import { useEffect } from 'react';

export function SignInMain() {
    const navigate = useNavigate()
    const { t } = useTranslation()
    const token = useAuthStore((state) => state.token)

    useEffect(() => {
        if (token) {
            navigate('/');
        }
    }, [token, navigate]);

    return (
        <div className="min-h-screen bg-(--bg) flex flex-col">
            <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 border-b border-(--border-header-buttons)">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 w-full sm:w-auto">
                    <a onClick={() => navigate('/')} className="flex items-center text-(--text-main) font-semibold text-base sm:text-lg w-fit cursor-pointer">
                        <FaBookOpen className="mr-2 text-lg sm:text-xl" />
                        <span>Monochrome Ledger</span>
                    </a>
                    <div className="flex flex-col">
                        <p className="text-xs sm:text-sm font-medium text-(--text-main)">{t('sign_continue')}</p>
                        <div className="flex items-center gap-1 text-xs text-(--text-secondary)">
                            <span>Monochrome Ledger</span>
                            <span>/</span>
                            <span>{t('sign_in')}</span>
                        </div>
                    </div>
                </div>
            </header>
            <div className="flex-1 flex items-center justify-center px-4 py-8 sm:py-12 md:py-16">
                <div className="w-full max-w-md">
                    <div className="mb-8 sm:mb-10 text-center sm:text-left">
                        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-(--text-main)">
                            {t('sign_in')}
                        </h1>
                        <p className="mt-3 text-xs sm:text-sm text-(--text-secondary) border-l-2 border-(--border-header-buttons) pl-3">
                            {t('create_account_info')}
                        </p>
                    </div>
                    <SignInForm />
                </div>
            </div>
            <footer className="px-4 sm:px-6 lg:px-8 py-4 border-t border-(--border-header-buttons)">
                <div className="max-w-md mx-auto text-center">
                    <p className="text-[10px] sm:text-xs text-(--text-secondary)">
                        © {new Date().getFullYear()} Monochrome Ledger. {t('all_rights')}.
                    </p>
                </div>
            </footer>
        </div>
    );
}