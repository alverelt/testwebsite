import './App.css';
import { AutoCenter, Button, Grid, List, Space } from 'antd-mobile';
import { Typography, Segmented } from 'antd';
import { TonConnectButton } from '@tonconnect/ui-react';
import { useState } from 'react';


function App() {
  const [selectedNumbers, setSelectedNumbers] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState("play");

  const toggleNumber = (num: string) => {
    if (selectedNumbers.includes(num)) {
      setSelectedNumbers(selectedNumbers.filter((n) => n !== num))
    } else if (selectedNumbers.length < 29) {
      setSelectedNumbers([...selectedNumbers, num])
    }
  }

  const totalCost = selectedNumbers.length * 0.05
  const numbers = Array.from({ length: 38 }, (_, i) => i + 1 < 10 ? `0${i + 1}` : `${i + 1}`); 

  const Play = () => (
    <Space direction='vertical' style={{gap: 30}} block>
      <Grid columns={6} gap={15}>
        {numbers.map((item) => (
          <Grid.Item>
            <Button 
              fill={selectedNumbers.includes(item) ? 'solid' : 'outline'}
              color={selectedNumbers.includes(item) ? 'warning' : 'default'}
              onClick={() => toggleNumber(item)}
            >
              {item}
            </Button>
          </Grid.Item>
        ))}
      </Grid>
      <div>
        <AutoCenter>
          <Typography.Text strong style={{ margin: 0 }}>
            Números seleccionados: {selectedNumbers.length}/29
          </Typography.Text>
        </AutoCenter>
        <AutoCenter>
          <Typography.Text strong style={{ margin: 0 }}>
            Costo total: {totalCost.toFixed(2)} TON
          </Typography.Text>
        </AutoCenter>
        <AutoCenter>*Se aplicará un fee adicional de la red TON</AutoCenter>
      </div>
      <Button block color='success'  size='large' disabled={selectedNumbers.length == 0}>
        Pulsa Aqui
      </Button>
    </Space>
  );

  const Rules = () => (
    <List mode='card'>
      <List.Item key={1}>1. Selecciona entre 1 y 29 números del 1 al 38.</List.Item>
      <List.Item key={2}>2. Cada número cuesta 0.05 TON.</List.Item>
      <List.Item key={3}>3. Se aplicará un fee adicional de la red TON al realizar la jugada.</List.Item>
      <List.Item key={4}>4. Los premios se distribuirán según la cantidad de aciertos.</List.Item>
      <List.Item key={5}>5. El jackpot se gana acertando todos los números seleccionados.</List.Item>
      <List.Item key={6}>6. Los resultados se anunciarán después del sorteo oficial.</List.Item>
    </List>
  );

  return (
    <>
      <Space direction='vertical' style={{gap: 25}} block>
        <TonConnectButton style={{ float: 'right' }} />
        <Space direction='vertical' style={{gap: 20}} block>
          <Segmented 
            options={[
              { label: 'Juego', value: 'play' },
              { label: 'Reglas', value: 'rules' }
            ]} 
            block 
            size='large'
            onChange={(value) => {setActiveTab(value)}}
          />
          {activeTab == 'play' ? <Play /> : <Rules />}
        </Space>
      </Space>
    </>
  )
}

export default App
