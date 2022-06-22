export default class AuthException {
  public message: string;
  public statusCode: number = 401
  
  constructor(message: string) {
    this.message = message;
  }
}
