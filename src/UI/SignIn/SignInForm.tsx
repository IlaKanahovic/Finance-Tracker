import { useTranslation } from "react-i18next"
import { useSignInForm } from "../../BLL/forms/useSignInForm"
import { login } from "../../store/authStore"
import { useNavigate } from "react-router-dom"

export function SignInForm() {
    const signInValueForm = useSignInForm()
    const navigate = useNavigate()
    const { t } = useTranslation()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        signInValueForm.submitForm(login, navigate)
    }

    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
                <label className="block text-xs font-medium uppercase tracking-wider text-gray-400">
                    {t('email')} <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    placeholder="you@domain.com"
                    value={signInValueForm.emailOrUsername}
                    className={`w-full bg-black border ${signInValueForm.errors.emailOrUsername && signInValueForm.touched?.emailOrUsername
                        ? 'border-red-500'
                        : 'border-gray-700'
                        } rounded-md px-3 sm:px-4 py-2.5 sm:py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-0 transition-all duration-300 hover:border-white focus:border-white text-sm sm:text-base`}
                    onChange={(event) => signInValueForm.setHandleEmailOrUsername(event.target.value)}
                    onBlur={() => signInValueForm.handleBlur('emailOrUsername')}
                />
                {signInValueForm.errors.emailOrUsername && signInValueForm.touched?.emailOrUsername && (
                    <p className="text-red-500 text-xs mt-1">{signInValueForm.errors.emailOrUsername}</p>
                )}
            </div>
            <div className="space-y-2">
                <label className="block text-xs font-medium uppercase tracking-wider text-gray-400">
                    {t('password')} <span className="text-red-500">*</span>
                </label>
                <input
                    type="password"
                    placeholder={t('enter_password')}
                    value={signInValueForm.password}
                    className={`w-full bg-black border ${signInValueForm.errors.password && signInValueForm.touched?.password
                        ? 'border-red-500'
                        : 'border-gray-700'
                        } rounded-md px-3 sm:px-4 py-2.5 sm:py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-0 transition-all duration-300 hover:border-white focus:border-white text-sm sm:text-base`}
                    onChange={(event) => signInValueForm.setHandlePassword(event.target.value)}
                    onBlur={() => signInValueForm.handleBlur('password')}
                />
                {signInValueForm.errors.password && signInValueForm.touched?.password && (
                    <p className="text-red-500 text-xs mt-1">{signInValueForm.errors.password}</p>
                )}
            </div>
            <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer group">
                    <div className="relative">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border border-gray-600 rounded bg-black transition-all duration-300 peer-checked:bg-blue-600 peer-checked:border-blue-600 group-hover:border-white"></div>
                        <svg
                            className="absolute top-0.5 left-0.5 w-3 h-3 sm:w-4 sm:h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-300 pointer-events-none"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="3"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <span className="text-xs sm:text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                        {t('rememner_device')}
                    </span>
                </label>
                <a href="#" className="text-xs sm:text-sm text-blue-400 transition-all duration-300 hover:text-white">
                    {t('forgot_password')}
                </a>
            </div>
            {signInValueForm.submitError && (
                <div className="bg-red-500/10 border border-red-500 rounded-md p-3">
                    <p className="text-red-500 text-sm text-center">{signInValueForm.submitError}</p>
                </div>
            )}
            <button
                type="submit"
                disabled={signInValueForm.isSubmitting}
                className="w-full px-4 py-2.5 sm:py-3 text-sm sm:text-base font-medium border border-gray-600 rounded-md text-gray-200 transition-all duration-300 hover:border-white hover:text-white hover:bg-white/5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {signInValueForm.isSubmitting ? t('entrance') : t('sign_in')}
            </button>
            <div className="text-center pt-2">
                <p className="text-xs sm:text-sm text-gray-400">
                    {t('dont_have_account')} {' '}
                    <a onClick={() => navigate('/signUp')} className="text-blue-400 transition-all duration-300 hover:text-white cursor-pointer">
                        {t('create_account')}
                    </a>
                </p>
            </div>
            <p className="text-[10px] sm:text-xs text-gray-500 text-center border-t border-gray-800 mt-6 pt-4">
                {t('by_creating')} {' '}
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    {t('terms_of_service')}
                </a>
                {' '} {t('and')} {' '}
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    {t('privacy_policy')}
                </a>
                {' '} {t('of_monochrome')}
            </p>
        </form>
    )
}