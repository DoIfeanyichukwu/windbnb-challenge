import styled from 'styled-components'

const GuestType = styled.span`
    font-family: "Mulish", sans-serif;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    color: #333333;
    display: block;
`

const GuestDesc = styled.span`
    font-family: "Mulish", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #bdbdbd;
    display: block;
`

const GuestBtn = styled.button`
    border: 1px solid #828282;
    border-radius: 4px;
    background-color: #fff;
    color: #828282;
    padding-block: 7.33px;
    padding-inline: 6.33px;
`

const GuestForm = styled.div`
    display: flex;
`

export {
    GuestType,
    GuestDesc,
    GuestBtn
}