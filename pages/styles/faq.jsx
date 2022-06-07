import styled from 'styled-components'

const FAQStyle = styled.div`
    max-width: 580px;
    width: 100%;

    button{
        width: inherit;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: none;
        padding: 18px 20px;
        font-size: 16px;
        color: #fff;
        font-weight: bold;
        cursor: pointer;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .txt{
        background-color: #f7f7f7;
        padding: 20px;
        color: #554E44;
        font-size: 16px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .visible{
        display: flex;
    }

    .notVisible{
        display: none;
    }

    .darkbg{
        background-color: #105057;
    }

    .lightbg{
        background-color: #008593;
    }
`
export default FAQStyle