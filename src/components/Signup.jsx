export function Signup() {
    return (
        <form>
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" />
            </div>
            <br />
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />
            </div>
            <br />
            <hr />
            <br />
            <input type="submit" value="Sign Up" />
        </form>
    )
}