

export function SignUpMain() {
    return (
        <div>
            <div></div>
            <hr className="rotate-180" />
            <div>
                <h1 className="">Sign in to continue to Monochrome Ledger</h1>
                <form>
                    <div>
                        <label
                            htmlFor="email"
                            className=""
                        >Email or Username</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            placeholder="you@domain.com or username"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className=""
                        >Password</label>
                        <input
                            type="text"
                            name="password"
                            id="password"
                            required
                            placeholder="Enter your password"
                        />
                    </div>
                    <div>
                        <input type="flexbox" />
                        <label htmlFor=""></label>
                    </div>
                    <button>Sign in</button>
                </form>
                <button>Create account</button>
            </div>
        </div>
    )
}