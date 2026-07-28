import { useTranslation } from "react-i18next"
import { useSignUpForm } from "../../BLL/forms/useSignUpForm"
import { register, login } from "../../store/authStore"
import { useNavigate } from "react-router-dom"

export function SignUpForm() {
    const signUpValueForm = useSignUpForm()
    const navigate = useNavigate()
    const { t } = useTranslation()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        signUpValueForm.submitForm(register, login, navigate)
    }

    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
                <label className="block text-xs font-medium uppercase tracking-wider text-(--text-secondary)">
                    {t('full_name')} <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    placeholder="John Doe"
                    value={signUpValueForm.fullName}
                    className={`w-full bg-(--bg) border ${signUpValueForm.errors.fullName && signUpValueForm.touched?.fullName
                        ? 'border-red-500'
                        : 'border-(--border-header-buttons)'
                        } rounded-md px-3 sm:px-4 py-2.5 sm:py-3 text-(--text-main) placeholder-(--text-secondary) focus:outline-none focus:ring-0 transition-all duration-300 hover:border-(--border-header-buttons-hover) focus:border-(--border-header-buttons-hover) text-sm sm:text-base`}
                    onChange={(event) => signUpValueForm.setHandleName(event.target.value)}
                    onBlur={() => signUpValueForm.handleBlur('fullName')}
                />
                {signUpValueForm.errors.fullName && signUpValueForm.touched?.fullName && (
                    <p className="text-red-500 text-xs mt-1">{signUpValueForm.errors.fullName}</p>
                )}
            </div>

            <div className="space-y-2">
                <label className="block text-xs font-medium uppercase tracking-wider text-(--text-secondary)">
                    {t('email')} <span className="text-red-500">*</span>
                </label>
                <input
                    type="email"
                    placeholder="you@example.com"
                    value={signUpValueForm.email}
                    className={`w-full bg-(--bg) border ${signUpValueForm.errors.email && signUpValueForm.touched?.email
                        ? 'border-red-500'
                        : 'border-(--border-header-buttons)'
                        } rounded-md px-3 sm:px-4 py-2.5 sm:py-3 text-(--text-main) placeholder-(--text-secondary) focus:outline-none focus:ring-0 transition-all duration-300 hover:border-(--border-header-buttons-hover) focus:border-(--border-header-buttons-hover) text-sm sm:text-base`}
                    onChange={(event) => signUpValueForm.setHandleEmail(event.target.value)}
                    onBlur={() => signUpValueForm.handleBlur('email')}
                />
                {signUpValueForm.errors.email && signUpValueForm.touched?.email && (
                    <p className="text-red-500 text-xs mt-1">{signUpValueForm.errors.email}</p>
                )}
            </div>

            <div className="space-y-2">
                <label className="block text-xs font-medium uppercase tracking-wider text-(--text-secondary)">
                    {t('username')} <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    placeholder="username"
                    value={signUpValueForm.userName}
                    className={`w-full bg-(--bg) border ${signUpValueForm.errors.userName && signUpValueForm.touched?.userName
                        ? 'border-red-500'
                        : 'border-(--border-header-buttons)'
                        } rounded-md px-3 sm:px-4 py-2.5 sm:py-3 text-(--text-main) placeholder-(--text-secondary) focus:outline-none focus:ring-0 transition-all duration-300 hover:border-(--border-header-buttons-hover) focus:border-(--border-header-buttons-hover) text-sm sm:text-base`}
                    onChange={(event) => signUpValueForm.setHandleUserName(event.target.value)}
                    onBlur={() => signUpValueForm.handleBlur('userName')}
                />
                {signUpValueForm.errors.userName && signUpValueForm.touched?.userName && (
                    <p className="text-red-500 text-xs mt-1">{signUpValueForm.errors.userName}</p>
                )}
            </div>

            <div className="space-y-2">
                <label className="block text-xs font-medium uppercase tracking-wider text-(--text-secondary)">
                    {t('password')} <span className="text-red-500">*</span>
                </label>
                <input
                    type="password"
                    placeholder={t('create_password')}
                    value={signUpValueForm.password}
                    className={`w-full bg-(--bg) border ${signUpValueForm.errors.password && signUpValueForm.touched?.password
                        ? 'border-red-500'
                        : 'border-(--border-header-buttons)'
                        } rounded-md px-3 sm:px-4 py-2.5 sm:py-3 text-(--text-main) placeholder-(--text-secondary) focus:outline-none focus:ring-0 transition-all duration-300 hover:border-(--border-header-buttons-hover) focus:border-(--border-header-buttons-hover) text-sm sm:text-base`}
                    onChange={(event) => signUpValueForm.setHandlePassword(event.target.value)}
                    onBlur={() => signUpValueForm.handleBlur('password')}
                />
                {signUpValueForm.errors.password && signUpValueForm.touched?.password && (
                    <p className="text-red-500 text-xs mt-1">{signUpValueForm.errors.password}</p>
                )}
                <p className="text-(--text-secondary) text-xs">{t('min_dep_password')}</p>
            </div>

            <div className="space-y-2">
                <label className="block text-xs font-medium uppercase tracking-wider text-(--text-secondary)">
                    {t('confirm_password')} <span className="text-red-500">*</span>
                </label>
                <input
                    type="password"
                    placeholder={t('confirm_your_password')}
                    value={signUpValueForm.confirmPassword}
                    className={`w-full bg-(--bg) border ${signUpValueForm.errors.confirmPassword && signUpValueForm.touched?.confirmPassword
                        ? 'border-red-500'
                        : 'border-(--border-header-buttons)'
                        } rounded-md px-3 sm:px-4 py-2.5 sm:py-3 text-(--text-main) placeholder-(--text-secondary) focus:outline-none focus:ring-0 transition-all duration-300 hover:border-(--border-header-buttons-hover) focus:border-(--border-header-buttons-hover) text-sm sm:text-base`}
                    onChange={(event) => signUpValueForm.setHandleConfirmPassword(event.target.value)}
                    onBlur={() => signUpValueForm.handleBlur('confirmPassword')}
                />
                {signUpValueForm.errors.confirmPassword && signUpValueForm.touched?.confirmPassword && (
                    <p className="text-red-500 text-xs mt-1">{signUpValueForm.errors.confirmPassword}</p>
                )}
            </div>

            <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer group">
                    <div className="relative">
                        <input type="checkbox" className="sr-only peer" required />
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border border-(--border-header-buttons) rounded bg-(--bg) transition-all duration-300 peer-checked:bg-blue-600 peer-checked:border-blue-600 group-hover:border-(--border-header-buttons-hover)"></div>
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
                    <span className="text-xs sm:text-sm text-(--text-secondary) group-hover:text-(--text-main) transition-colors duration-300">
                        {t('i_agree_privacy_policy')} <span className="text-red-500">*</span>
                    </span>
                </label>
            </div>

            {signUpValueForm.submitError && (
                <div className="bg-red-500/10 border border-red-500 rounded-md p-3">
                    <p className="text-red-500 text-sm text-center">{signUpValueForm.submitError}</p>
                </div>
            )}

            <button
                type="submit"
                disabled={signUpValueForm.isSubmitting}
                className="w-full px-4 py-2.5 sm:py-3 text-sm sm:text-base font-medium border border-(--border-header-buttons) rounded-md text-(--text-main) transition-all duration-300 hover:border-(--border-header-buttons-hover) hover:text-(--text-main) hover:bg-(--text-expenses-item-hover) cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {signUpValueForm.isSubmitting ? t('account_creation') : t('create_account')}
            </button>

            <div className="text-center pt-2">
                <p className="text-xs sm:text-sm text-(--text-secondary)">
                    {t('alredy_account')} {' '}
                    <a onClick={() => navigate('/signIn')} className="text-blue-400 transition-all duration-300 hover:text-(--text-main) cursor-pointer">
                        {t('sign_in')}
                    </a>
                </p>
            </div>
            <p className="text-[10px] sm:text-xs text-(--text-secondary) text-center border-t border-(--border-header-buttons) mt-6 pt-4">
                {t('by_creating')} {' '}
                <a href="#" className="text-(--text-secondary) hover:text-(--text-main) transition-colors duration-300">
                    {t('terms_of_service')}
                </a>
                {' '} {t('and')} {' '}
                <a href="#" className="text-(--text-secondary) hover:text-(--text-main) transition-colors duration-300">
                    {t('privacy_policy')}
                </a>
                {' '} {t('of_monochrome')}
            </p>
        </form>
    )
}