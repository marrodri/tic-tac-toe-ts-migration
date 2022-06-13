import React, { useState, useEffect } from 'react'
import { calculateWinner, classNames } from '../utils/util'
import '../index.css'

function Square(props: any) {
  return (
    <button
      className="square"
      style={{ width: '100px', height: '100px', fontSize: '50px' }}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  )
}

function Board(props: any) {
  const board: any = []
  var i: number = 1
  var row: any = []
  const renderSquare = (i: number) => (
    <Square
      key={i.toString()}
      value={props.squares[i]}
      onClick={() => props.onClick(i)}
    />
  )

  while (i <= 9) {
    row.push(renderSquare(i - 1))
    if (i % 3 === 0) {
      let newrow = [...row]
      board.push(
        <div key={i.toString()} className="flex flex-row">
          {newrow}
        </div>
      )
      row = []
    }
    i++
  }
  return <div className="flex flex-col">{board}</div>
}

export default function Game() {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }])
  const [stepNumber, setStepNumber] = useState(0)
  const [xIsNext, setXIsNext] = useState(true)
  const [status, setStatus] = useState('')
  //   const [moves, setMoves] = useState()

  const handleClick = (i: number) => {
    const copyHistory = history.slice(0, stepNumber + 1)
    const current = copyHistory[copyHistory.length - 1]
    const squares = current.squares.slice()

    if (calculateWinner(squares) || squares[i]) {
      return
    }
    squares[i] = xIsNext ? 'X' : 'O'
    setHistory(copyHistory.concat([{ squares: squares }]))
    setStepNumber(copyHistory.length)
    setXIsNext(!xIsNext)
  }
  const jumpTo = (step: number) => {
    setStepNumber(step)
    setXIsNext(step % 2 === 0)
  }
  useEffect(() => {
    const winner = calculateWinner(history[stepNumber].squares)

    if (winner) {
      setStatus('Winner' + winner)
    } else {
      setStatus('Next player: ' + (xIsNext ? 'X' : 'O'))
    }
  }, [stepNumber])

  return (
    <div>
      <Board
        squares={history[stepNumber].squares}
        onClick={(i: number) => handleClick(i)}
      />
      <div className="history">
        <div className="text-4xl font-bold underline">{status}</div>
        <ol>
          {history.map((gameState, index) => {
            const desc =
              index === 0 ? 'Go to game start' : `Got to move # ${index}`
            return (
              <li className="text-3xl" key={index}>
                <button onClick={() => jumpTo(index)}>{desc}</button>
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  )
}
