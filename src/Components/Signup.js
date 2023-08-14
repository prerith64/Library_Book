import React, { useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You can add form validation and API calls here
  };

  return (
    <div className="container">
      <div className="  row justify-content-center">
        <div className=" col-md-4">
          
            <div className="border border-3 border-dark p-4 mt-5 bg-white card-body">
              <h2 className="card-title text-center">Sign Up</h2>
              <form onSubmit={handleSubmit}>
              <label htmlFor='Signup'>Name</label>
                <input
                  type="text"
                  className="form-control mb-3"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
                <label htmlFor='Signup'>Email</label>
                <input
                
                  type="email"
                  className="form-control mb-3"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label htmlFor='Signup'>Password</label>
                <input
                  type="password"
                  className="form-control mb-3"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <input
                  type="password"
                  className="form-control mb-3"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                <button type="submit" className="btn btn-primary btn-block" >
                <Link class="nav-link" to={"/Login"}>Sign Up</Link>
                </button>
                <div className='weblinks'> 
                     <a href='https://www.google.com'><img src='data:image/png;base64,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' 
                     alt='loading...'
                     height={'40px'}
                     ></img></a>

                     <a href='https://in.linkedin.com'><img src='data:image/png;base64,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' 
                     alt='loading...'
                     height={'40px'}
                     
                     ></img></a>
                     <a href='https://in.linkedin.com'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEUYd/L///8AcvIAbPEXePIAcPKkw/nx9/4AbvEAa/GSt/iMs/cKdPIJc/Lt9P5ZlvXC1vtfmfVtofbZ5vyWuvhQkfSpxvm60fqvyfnd6f3T4vzn8P32+v+bvfhJjfRlnPUnfvN9qvbK3Ps6hvMugfN5qPYAZ/Hi7f20zfqEr/f2EiWvAAAKz0lEQVR4nN3d6WKqvBYGYCBGQYNjHepQqcOxvf8bPGAdUAgkWXkJ316/9v7RwlMyj57fTAwvs8N4+bPK4mc5Pswuw20zT/bAv/8y7v5Ojh3OGAv5M8L0/7xznPx2x5/gN8AJh4fd9JS5AiG88hAiyKyn/e4whL0HRvi5miapLZbR3qBx6kymC8zXtC8c/kw9xmMlWz5izrzpamP9fSwLPz+OJrqc8tif2X0lm8LPQcK4WsKUh+AsGdhEWhMOdyc67xYBO+2sJVdLwvHEGu8a6Zccje28mg3hdtdhNnk3JPN2PQtvRxduvjm3zvsLzs8X58LPfRSAfFkE0Z5a6tCEnxNmXjWoRcxGNCNFuNlHaF8WIppQ0qq5cPsN/373iNnZvMwxFnY5Mv+9RxDuGhYeElT5KQueHBoUbqeR/fqvLkS0N0qqJsJVown0GXG4akTYGzEnvizYXL+nrC1chk2VoGURsx+0cOruA/4F20OFs46bHJiPwFvjhF1AF0I/RKRVN+oI965T6D3YBCIcnpqu5OURJOpDAMrCddCGFHoPwZVbOKrCn8g16i0i1dpfUdhvGzAlDmwKz20pY/LBpvaEk/aUMfngI1vCeTuBKfHLjvCrrcC01jjaELYYqESsFbYaqEKsE7Y2D94jqMuLNcKWlqL5qCtRq4Xn9gNTYnW9WCnst7GiLwarbN1UCVvXFpVFtDATrv8rwJRY0dOQC4fuByzUg8v7i3LhqU39wboQib5w31QxKoLbGqn7sqkgli4xkkcgHdiQCbtNFKMxZywZfX+slofDbDZbHw7jn+7ud5otE4uy1VSKS46yYLLhKYlwhgdy5u27a+nyveFsvBjsj4Kpju9FkkFGibADzoQxS/pqw56b9V71Xcr/WuXCKbYc5fysMarbV3wZSVYsFS6haZSHH1rTZAPVPzcrHZwqE/ZCoC8O+zo8HaHHymamyoQj4OwSG2kv51IXirmacIVLoyLUnhzTEXqspIFaFG5xVT0/mqzH0xB6YTGHF4W4cjTUnfrTF8bF8rQgPMB6FOzXCKgl9KLCisaCMEHV9dX9VFvCYhP8XdhF5cLQ8AtqCj3+US2EFTPcLA/qCwuFzZvwG1TMCIXBaUvC4G1g6lW4QVWFIWHZtqbQY6/7Nl6Fe1BrRn8VDEEYvw6gvgg/QTVFaWsKJvSilyW3L8IJ6hOSthZoC1//oHnhJygXctOa0FDosfxHzAtRuZDTdhrqC0U+J+aEG1Au5LodQrLQi3ILw3NCVF1Y0t5HC+NzmRDVnMk/rSmhFz57+0/hDiRkeksJ7QhzrdOnsGMfdw35eDtQ6ImicIyqKojljKEwXBaEE1C/kJF3S5p9w0etfxcOUW3uDhVoJny2o+5CVDkTqy0+qwrVMe/XeJQ1dyFqtpBrbZEYLvv7Y+KJWOTD7Mn3Eu4mRDVJ3ztrlbH6Ut/Dr/Dk9YtwABu9UPYtAqs7ib3g90WIGmFTHr3ofVlPRZ28EDYhqlrQXGL7/ZpbMv0TfsASqdrWiKG13Jd/9iAnPKKGgbnaAA3k+eL0FMKqe48pbRrYYSYs2eUh/IFNNylVFqh+G188hFPYlGjprGzhE6LaU/uHEPOALEKVIRrY6qv4LoQ1aNQq/AtuPm92E65ws76BghD3eN69CXHZUEmIGgG7ZcRMmKCeoCac49Zfdf6EuNpQTQhc5pl1g1PhAbhASEWIGgJLIxxfhajqKAvHwmwYzIMWNK6FYnIVIpc7OxZmQxmpELkQ0bUw2qbCy78sTFs1nj9GrrV0LeTLVAhbI5SFc+EuFf5CTyNzLAzOqRA1YfH3BMdCMU+FsDGaLJwLT6kQ+QDnQk+kQujuH+dCvvWQPYsWCNnGg1b4LRB+etgdTs6F4dpD9g5bIORjb/yPlzRLb/mPC3883Ih+Fu6FKw84WOq1QbiwIBRcHpGCMKj4eU49hZl36UIxWXTloSCs+Ok0FrRPbENY2MJhOWjvZ0VIXrhWGcRpozQfkstSsJA4yJKWpeT6ECwkjlen9SG5TQMWnmnj1WmbhtwuBQu/aEMQabuU3LcAC4ljLGnfgtw/xAqHxCnwtH9I7uNjhWvi66V9fPJiFqyQWl3zLX2sDSs0WwL9DGFhvBQrJI5XX8dLqWPeWGFCe7nrmDd13gIqpJYS8dnC3BNUSK3LrnNP1PlDqJD8ctn8IXVVG1RIXSdynQOmzuNDhcR29988PnUtBlRIbHdny7488vZfqJD4CW/raah9TKCwR2x339ZEEXuISCG13X1b10bsXSCF1Hb3bW2in7RWSN2OdVtfSly6hxQS28yPNcIL0l8KKaRWZPd13rRWDVBIbXc/1urT9lsAhdR293Xmi75nBigktrvF5CEkFcpAIbFjl9v3RDoeCig80zrnub1rpLGaYLDtyUPBIf3ZLa3dfTuc7k/YpySHgEkj+p+CMIxkP06rK4L8HlLYsiGX8/gv+4D9BPQUl8KXvdzkgVdZOBS+7cdHJVOHwrczFVDbShwK387FQG1+cid8VNN3IehMSHdCdj/Q7HHG0AiSTJ0Ji2cMgc6JciYsOScKs2XdmTB+uh7/gpQ1roS57sBT2PuXhKzszD1qX6U0HAnzx+LkhIizDRwJo9yBI+DzS90IZeeXIhqnboQvh1G+nCNsv9Z3IpSfI+zPrOdEJ8LXW4Nez/O2fhi0C6GoOM/b/r5uF8LKM9mt14kOhNXn6lu/JsiBMHw7mur9fgvLrdPmhYUBavAdJc0LCyfCgu+ZaVzI6u+Zsdt2a1oYF6/OLQqt9qKaFpacgAe+s6thYViyk6zs3rW5vXTarFCU3WBdJrS4Rb9ZYVR2U0jp/Yc/1oiNCsvulZPdYbm31XhrUlhSjsqF1u4hbVIodO4htXZjdYNC2c3VsvuAd3ayYnPCULZZV3qn88RKxd+YMCjPhFVCO03wpoQm93L7GxsfsSkhv0h/vVxopZfRkLB4c6WS0F/Ric0IWdXBBlVCf0AuUBsRVl+PWSn0p9S82ISw5nrMaqE/IhIbEPKaqwdrhP4XrYWKFwZ1N2jUCf0jiQgXxrVXhNQKaUS0MD7VHmtfLyQRwcLgWH9uv4LQ/zIvbrBCrnKLjYqQUKJChXWlqIbQn5pW/Uih4lXtakJ/YNiAAwpVr2pXFPoLMyJOGKkcsqUj9A9GN2qhhIJX9CYMhf4mMag1QMIgkfcHzYW+P9EvbzDCUDpkQRT6O+3MCBFGWifEaQn9taeZUgHCWCjdkmUo9LeaKdW+kI0078DWFGZzbzplqm2hiErnJqwK/eFc4zNaFoZf+vfQ6wvT2j9UnmC0KowrR5xkYSL0e5NIManaFLKRyiVuhTAS+v44Uetu2BPyjnIr5jUMhb7/EapUHLaEATPeqWos9HtTVp8d7QgFmxol0GuYC33/Up8dbQhFNNK4VLgQFKHvz+Y135EuFGy+rv8dFUETpsZJVGWkCuNoRPPRhWlaPYfycpUm5GxKSZ9/QRemrZwPEUoyJEEowrhvXr48w4YwjeWclX5IYyFn82X9j6qEJaHvbz4SVqwhzYQBS/r6DVBJWBOmsf7tsLfRHH2hCFjnl1q65MOmMI314MR4bCwUnCUDmzzfujCNzWIfP5QawpizYLJQH2FSDfvCLGbdfYeFXAgloRA8ZJ19dwZ5F4wwi824P0mUTv7oTPpjawVLIXDCa6iMqWiOu+gGWNiC+D9eSquO5uzvagAAAABJRU5ErkJggg==' 
                     alt='loading...'
                     height={'40px'}
                     ></img></a>
                </div>
              </form>
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default SignUp;
