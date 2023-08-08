import React, { Key, memo } from 'react'
import { useTheme } from '../../hooks'
import { Platform, TextInput as RNTextInput, TextInputProps } from 'react-native'
import { useTranslation } from 'react-i18next'

type Props = {
  value: string
  setValue:
    | {
        key: string
        state: any
        setState: any
      }
    | any
  typeValue?: 'string' | 'number'
  style?: any
}

const TextInput = React.forwardRef(function MyTextInput(props: Props & TextInputProps, ref: React.Ref<RNTextInput>) {
  const { style, value, setValue, typeValue = 'string' } = props
  const { t } = useTranslation(['placeholder'])
  const { Layout } = useTheme()
  return (
    <RNTextInput
      style={{
        ...Layout.p5,
        ...Layout.mv5,
        ...Layout.blackBorderHalfpx,
        ...Layout.radiusBorder,
        height: 35,
        paddingLeft: 10,
        ...style
      }}
      placeholder={t('placeholder:placeholderInputDefault')}
      {...props}
      ref={ref}
      value={value}
      onChangeText={(value: string) => {
        if (setValue?.key) {
          setValue.setState({
            ...setValue.state,
            [setValue.key as Key]: typeValue == 'string' ? value : Number.parseInt(value)
          })
        } else {
          setValue(typeValue == 'string' ? value : Number.parseInt(value))
        }
      }}
    />
  )
})

export default memo(TextInput)
