export function CreatePost() {
    return (
        <form>
            <div>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" required />
            </div>
            <br />
            <div>
                <textarea id="contents" name="contents" />
            </div>
            <br />
            <hr />
            <br />
            <input type="submit" value="Create" />
        </form>
    )
}