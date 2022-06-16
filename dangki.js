body {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: var(--bg--color);
    font-family: "Roboto", sans-serif;
  }
  :root {
    --bg--color: #006778;
    --primary--color: #fff;
    --secondary--color: #a4ebf3;
    --gray--color: #aaaaaa;
  }
  .wapper {
    margin-top: 120px;
    width: 300px;
    background-color: var(--primary--color);
    padding: 10px 30px 30px;
    border-radius: 10px;
  }
  .wapper input {
    padding-left: 10px;
    margin-bottom: 10px;
    height: 45px;
    width: 100%;
    border: 1px solid #0093ab;
    outline: none;
    border-radius: 10px;
  }
  .wapper .btn {
    padding: 8px 15px;
    border: none;
    outline: none;
    border-radius: 5px;
    background: var(--bg--color);
    transition: all 0.2s linear;
  }
  .btn:hover {
    transform: scale(1.1);
  }
  .wapper input:focus {
    border: 1px solid var(--bg--color);
  }
  .wapper input::placeholder {
    color: black;
  }
  .wapper .signup-link {
    display: block;
    transform: translateX(120px);
    margin-bottom: 20px;
    color: var(--bg--color);
  }