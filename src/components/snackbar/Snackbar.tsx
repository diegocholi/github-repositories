import './style.scss'
import React, { ForwardRefRenderFunction } from "react"
import { useCallback } from "react"
import { useState, useImperativeHandle } from "react"
import { 
    FaCheckCircle, 
    FaExclamationCircle, 
    FaExclamationTriangle, 
    FaInfoCircle,
    FaTimes
} from 'react-icons/fa'
import { IconType } from 'react-icons'

export interface MessageProps {
}

export interface ISnackbarHandles {
    openSnackbar: (
        type: 'error' | 'warning' | 'info' | 'success',
        message: string
    ) => void
}

interface ISnackbarStyle {
    backgroundColor: string
    IconSnack: IconType | undefined
}

interface ISnackbarConfig {
    isVisible: boolean
    message: string
    style: ISnackbarStyle
}

const Snackbar: ForwardRefRenderFunction<ISnackbarHandles, MessageProps> = (props, ref) => {
    const [snackbarConfig, setSnackbarConfig] = useState<ISnackbarConfig>({
        isVisible: false,
        message: '',
        style: {
            backgroundColor: '',
            IconSnack: undefined
        }
    })

    const setStyleSnackbar = (type: string): ISnackbarStyle => {
        let backgroundColor: string = ''
        let IconSnack: IconType | undefined = undefined
        switch(type) {
            case 'error':
                IconSnack = FaExclamationCircle
                backgroundColor = '#f44336'
                break
            case 'warning':
                IconSnack = FaExclamationTriangle
                backgroundColor = '#ff9800'
                break
            case 'info':
                IconSnack = FaInfoCircle
                backgroundColor = '#2196f3'
                break
            case 'success':
                IconSnack = FaCheckCircle
                backgroundColor = '#4caf50'
                break
            default:
                break
        }
        return {
            backgroundColor: backgroundColor,
            IconSnack: IconSnack
        }
    }

    const openSnackbar = useCallback((type: string, message: string) => {
        setSnackbarConfig({
            isVisible: true,
            message: message,
            style: setStyleSnackbar(type)
        })
        setTimeout(() => {
            setSnackbarConfig({
                isVisible: false,
                message: '',
                style: {
                    backgroundColor: '',
                    IconSnack: undefined
                }
            })
        }, 5000)
    }, [])
    
    const closedSnackbar = () => {
        setSnackbarConfig({
            isVisible: false,
            message: '',
            style: {
                backgroundColor: '',
                IconSnack: undefined
            }
        })
    }

    useImperativeHandle(ref, () => {
        return {
            openSnackbar
        }
    })

    if(!snackbarConfig.isVisible)
        return <></>

    return ( 
        <div className='snackbar-container' style={{
            backgroundColor: snackbarConfig.style.backgroundColor
        }}>
            <div className='snackbar-content'>
                <div className={'icon-container'}>
                {snackbarConfig.style.IconSnack ? (
                    <snackbarConfig.style.IconSnack className='snackbar-icon' /> 
                ): ''}
                </div>
                <div className='snackbar-message'>
                    {snackbarConfig.message}
                </div>
                <div className='icon-container' onClick={closedSnackbar}>
                    <FaTimes className='snackbar-exit-icon' />
                </div>
            </div>
        </div>
    )
}
 
export default React.forwardRef(Snackbar)
