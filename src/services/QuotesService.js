import Api from '@/services/Api'

export default {
  fetchQuotes() {
    return Api().get('api/quotes')
  }
}
