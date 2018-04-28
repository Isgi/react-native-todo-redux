import axios from 'axios'

const allFoods = () => {
  const url = 'https://api.backendless.com/EA186AD3-330D-1067-FFB0-30E606D29300/C5E35F0B-45FD-A375-FF82-3CB231171200/data/foods'

  return {
    type: 'ALL_FOODS',
    payload: axios({
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'user-token': 'C2968876-EF69-89FE-FF2D-4477FF165800'
      },
      url
    })
  }
}

export {
  allFoods
}