import { FaBookOpen } from 'react-icons/fa';
import { SignInForm } from './SignInForm';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function SignInMain() {
    const navigate = useNavigate()
    const { t } = useTranslation()

    return (
        <div className="min-h-screen bg-black flex flex-col">
            <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 border-b border-gray-800">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 w-full sm:w-auto">
                    <a onClick={() => navigate('/')} className="flex items-center text-white font-semibold text-base sm:text-lg w-fit cursor-pointer">
                        <FaBookOpen className="mr-2 text-lg sm:text-xl" />
                        <span>Monochrome Ledger</span>
                    </a>
                    <div className="flex flex-col">
                        <p className="text-xs sm:text-sm font-medium text-white">{t('sign_continue')}</p>
                        <div className="flex items-center gap-1 text-xs text-gray-400">
                            <span>Monochrome Ledger</span>
                            <span>/</span>
                            <span>{t('sign_in')}</span>
                        </div>
                    </div>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-600 cursor-pointer hover:border-white transition-all duration-300"></div>
            </header>
            <div className="flex-1 flex items-center justify-center px-4 py-8 sm:py-12 md:py-16">
                <div className="w-full max-w-md">
                    <div className="mb-8 sm:mb-10 text-center sm:text-left">
                        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                            {t('sign_in')}
                        </h1>
                        <p className="mt-3 text-xs sm:text-sm text-gray-400 border-l-2 border-gray-700 pl-3">
                            {t('create_account_info')}
                        </p>
                    </div>
                    <SignInForm />
                </div>
            </div>
            <footer className="px-4 sm:px-6 lg:px-8 py-4 border-t border-gray-800">
                <div className="max-w-md mx-auto text-center">
                    <p className="text-[10px] sm:text-xs text-gray-500">
                        © {new Date().getFullYear()} Monochrome Ledger. {t('all_rights')}.
                    </p>
                </div>
            </footer>
        </div>
    );
}