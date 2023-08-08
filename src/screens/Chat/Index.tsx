import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native'
import { useTheme } from '../../hooks'
import { Colors } from 'MyApp/src/theme/Variables'
import TextInput from 'MyApp/src/components/TextInput/TextInput'
const signalR = require('@microsoft/signalr')

const ChatScreen = () => {
  const { Common, Fonts, Gutters, Layout, Images, darkMode: isDark } = useTheme()

  const [messages, setMessages] = useState<any[]>([])
  
  const [connection, setConnection] = useState<any>()
  const [myMessage, setMyMessage] = useState<string>('')
  const [myName, setMyName] = useState<string>('HiepCD')

  useEffect(() => {
    const newConnection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Debug)
      .withUrl('https://vedientu.pmbk.vn/signalR', {
        accessTokenFactory: () =>
          `eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIwNTkyOGRlNS03ZTQ3LTQ4MmQtYjdjOS1kMDQwOGJhNWYzOGUiLCJuYW1lIjoic3luYyIsImZ1bGxOYW1lIjoiU3luYyIsImNvbm5lY3Rpb25TdHJpbmciOiJTZXJ2ZXI9MTAuMTAuMjAuMTE7RGF0YWJhc2U9VGlja2V0MDIwMDQ0OTI2NTtVc2VyIElkPXNhO1Bhc3N3b3JkPUJrOTEwOHZuO011bHRpcGxlQWN0aXZlUmVzdWx0U2V0cz10cnVlIiwiZGF0YWJhc2VOYW1lIjoiVGlja2V0MDIwMDQ0OTI2NSIsInRheENvZGUiOiIwMjAwNzg0ODczLTk5OSIsIm5iZiI6MTY5MTM3NzI4MywiZXhwIjoxNjkxNDI3NjAwLCJpYXQiOjE2OTEzNzcyODN9.jsHTYBs3tgd3TQrM2bc_G6DVZkB6wmIkefLVgzjKpxopVaS_6sQbuyvVJC8c1-Zu1iQIOA-fStX2D4twXCardw`
      })
      .build()
    setConnection(newConnection)
  }, [])

  useEffect(() => {
    if (connection) {
      connection.start().then(() => {
        connection.on('ReceiveMessage', (message: any) => {
          console.log('🚀 ~ file: Login.tsx:87 ~ connection.on ~ message:', message)
          setMessages([
            ...messages,
            {
              user: myName,
              message: message
            }
          ])
        })
      })
    }
  }, [connection])

  useEffect(() => {
    return () => {
      if (connection) {
        connection.stop()
      }
    }
  }, [connection])

  const sendMessage = async () => {
    try {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIwNTkyOGRlNS03ZTQ3LTQ4MmQtYjdjOS1kMDQwOGJhNWYzOGUiLCJuYW1lIjoic3luYyIsImZ1bGxOYW1lIjoiU3luYyIsImNvbm5lY3Rpb25TdHJpbmciOiJTZXJ2ZXI9MTAuMTAuMjAuMTE7RGF0YWJhc2U9VGlja2V0MDIwMDQ0OTI2NTtVc2VyIElkPXNhO1Bhc3N3b3JkPUJrOTEwOHZuO011bHRpcGxlQWN0aXZlUmVzdWx0U2V0cz10cnVlIiwiZGF0YWJhc2VOYW1lIjoiVGlja2V0MDIwMDQ0OTI2NSIsInRheENvZGUiOiIwMjAwNzg0ODczLTk5OSIsIm5iZiI6MTY5MTM3NzI4MywiZXhwIjoxNjkxNDI3NjAwLCJpYXQiOjE2OTEzNzcyODN9.jsHTYBs3tgd3TQrM2bc_G6DVZkB6wmIkefLVgzjKpxopVaS_6sQbuyvVJC8c1-Zu1iQIOA-fStX2D4twXCardwr'
        },
        body: JSON.stringify({
          user: myName,
          message: myMessage
        })
        // redirect: 'follow'
      }

      fetch('https://vedientu.pmbk.vn/api/Chat/SendMessageAllClient', requestOptions)
        .then((response) => response.text())
        .then((result) => {
          console.log('🚀 ~ file: Login.tsx:128 ~ .then ~ result:', result)
          setMessages([
            ...messages,
            {
              user: myName,
              message: myMessage
            }
          ])
          setMyMessage('')
        })
        .catch((error) => console.log('error', error))
    } catch (error) {
      console.log('🚀 ~ file: Login.tsx:134 ~ sendMessage ~ error:', error)
    }
  }

  return (
    <View style={[Layout.flex[1], Layout.fill, Layout.mt15]}>
      <View style={[Layout.flex[1], Layout.blackBorder, Layout.radiusBorder, Layout.mb10]}>
        <Text style={[Fonts.textCenter, Layout.mt10]}>Chat</Text>
        <ScrollView>
          {messages.map((item, index) => {
            return (
              <View style={[Layout.m10]} key={index}>
                <View style={[item.user != myName && Layout.rowReverse]}>
                  <Text style={[Fonts.textBold, Fonts.textTiny]}>{item.user}</Text>
                </View>
                <View style={[item.user != myName && Layout.rowReverse]}>
                  <Text
                    style={[
                      Layout.p10,
                      Layout.blackBorder,
                      Layout.radiusBorder,
                      Fonts.textSmall,
                      Layout.mt5,
                      Layout.mb10
                    ]}
                  >
                    {item.message}
                  </Text>
                </View>
              </View>
            )
          })}
        </ScrollView>
      </View>

      {/* Send message box */}
      <View style={[Layout.row, { justifyContent: 'space-between' }]}>
        <View style={[Layout.flex[1]]}>
          <TextInput value={myMessage} setValue={setMyMessage} style={[]} />
        </View>
        <TouchableOpacity
          style={[Layout.center, Layout.ml10]}
          onPress={async () => {
            await sendMessage()
          }}
        >
          <Image source={Images.icons.send} height={25} width={25} style={[Layout.m5]} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ChatScreen
