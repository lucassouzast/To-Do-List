import styled from 'styled-components';

type ContainerProps = {
    done: boolean;
}

export const Container = styled.div(({done}: ContainerProps)=>(
    `
    display: grid;
    grid-template-columns: 25px auto 90px;
    grid-gap: 10px;
    background-color: #20212c;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;

    input{
        width: 25px;
        height: 25px;
    };

    label{
        color: #ccc;
        text-decoration: ${done ? 'line-through' : 'initial'};
    }

    .inputName{
        width: 100%;
        border: 1px solid #c2c2c2;
        border-radius: 8px;
        outline: none;
        background-color: #20212c;
        color: #fff;
    }

`
));

export const EditArea = styled.div`
    
    max-width: 980px;
    button{
        padding: 5px;
        margin-left: 5px;
    }

    .modal{
        width: 30%;
        height: 200px;
        position: fixed;
        top: 30%;
        left: 35%;
        z-index: 2;
        background-color: #f3f6f4;
        padding: 20px;
        border-radius: 8px;
        font-size: 0.7em;
        color: #000;
        text-align: center;
        .close{
            position: absolute;
            top: 10px;
            right: 10px;
            border: 2px solid black;
        }
        .Button{
            font-size:2em;
            padding: 10px;
            margin-top: 40px;
            margin-left: 15px;
            width: 120px;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            :hover{
                border-color: #1a0615;
            }
            :focus, :focus-visible{
                outline: 4px auto -webkit-focus-ring-color;
            }
        }
        #yes{
            color: #000;
            background-color: #DC3545;
        }
        
        #no{
            background-color: #cecece;
        }

    }

    .bgModal{
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: #00000020;
        z-index: 1;
    }

    

`

