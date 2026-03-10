export const EmailverificationTemplate = (name,link) => {
    return `
    <div>
      <h1 style="color: blue"> Hello ${name},Click the verification link to verify account!</h1>
      <p>${link}</p>
    </div>`
}