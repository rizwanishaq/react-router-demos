import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { toast } from 'react-toastify'
import AddBudgetForm from '../components/AddBudgetForm'
import AddExpenseForm from '../components/AddExpenseForm'
import Intro from '../components/Intro'

// helper functions
import { createBudget, createExpense, fetchData } from '../helpers'

// loader
export function dashboardLoader(){
    const userName = fetchData("userName")
    const budgets = fetchData("budgets")
    return {userName, budgets}
}

// action
export async function dashboardAction({request}) {
  const data = await request.formData();
  const {_action, ...values} = Object.fromEntries(data)
  if(_action === "newUser") {
    try {
      localStorage.setItem("userName", JSON.stringify(values.userName))
      return toast.success(`Welcome ${values.userName}`)
      
    } catch (error) {
        throw new Error("There was a problem creating your account.")
    }
  }
  
  if(_action === "createBudget") {
    try {
      // create budget
      createBudget({
        name: values.newBudget,
        amount: values.newBudgetAmount
      })

      return toast.success("Budget created successfully")
    } catch (error) {
      throw new Error("There was a problem creating your budget.")
    }
  }

  if(_action === "createExpense") {
    try {
      // create Expense
      createExpense({
        name: values.newExpense,
        amount: values.newExpenseAmount,
        budgetId: values.newExpenseBudget
      })

      return toast.success(`Expense ${values.newExpense}created successfully`)
    } catch (error) {
      throw new Error("There was a problem creating your Expense.")
    }
  }


}




const Dashboard = () => {
    const {userName, budgets} = useLoaderData()
  return (
    <>
      {userName ?  (<div className='dashboard'>
        <h1>Welcome back, <span className='accent'>{userName}</span></h1>
        <div className='grid-sm'>
          {
            budgets && budgets.length > 0 
            ? 
            (
              <>
          <div className='grid-lg'>
            <div className='flex-lg'>
              <AddBudgetForm />
              <AddExpenseForm budgets={budgets} />
            </div>
          </div>
              </>

            ) : (
              <>
              <div className='grid-sm'>
                <p>Personal budgeting is the secrete to financial freedom</p>
              <AddBudgetForm />
              </div>
              </>

            )
          }
        </div>
      </div>) : <Intro />}
    </>
  )
}

export default Dashboard