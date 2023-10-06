import React, { FormEvent, useState } from 'react'
import './style.scss'
import { BuyerSignupHero } from "../../../components/pages/buyer/signup/hero"
import { useNavigate } from 'react-router-dom'



function SignUp() {
		const [heading, setHeading] = useState('Sign Up')
		const [subHeading, setSubHeading] = useState('Sign Up')
		const [initialSignup, setInitialSignup] = useState(false)
		const [formData, setFormData] = useState({ username: '', gender: '', date_of_birth: '', password: '', password_confirmation: '' })
		const [formValidation, setFormValidation] = useState({ username: '', gender: '', date_of_birth: '', password: '', password_confirmation: '' })
		let signupFields = null
		const navigate = useNavigate()

		const handleContinueClick = () => {
				validateUsername()
		}

		const handleSubmit = (e) => {
				e.preventDefault()
				navigate('/buyer/home')

				if (! initialSignup) {
						validateUsername()

				} else {
						// validate fields
						let errors = 0

						alert(formData.date_of_birth)
				}
		}

		const handleInputChange = (e: FormEvent<HTMLFormElement>) => {
				const { name, value } = e.target as any
				setFormData({ ...formData, [name]: value })
		}

		const validateUsername = () => {
				if (formData.username === '') {
						setFormValidation({ ...formValidation, username: 'Email or phone field is required' })
				} else {
						setHeading('Personal Information')
						setSubHeading('We just need some information from you.')

						setFormValidation({ ...formValidation, username: '' })
						setInitialSignup(true)
				}
		}

		if (! initialSignup) {
				signupFields = (
						<div>
								<button type='button' className='btn btn-primary mt-40' onClick={handleContinueClick}>Continue</button>

								<fieldset className='form-legend my-20'>
										<legend>Or</legend>
								</fieldset>

								<button type='button' className='btn btn-outline mt-40'>
										{/* <img src={google_logo} alt='google-logo' className='mr-8' /> Google */}
								</button>

								<div className='signup-form--agree my-40 m-auto text-center'>
										<p>
												By signing up, I agree to Shopindo’s <a href='#' className='text-primary underline'>Terms & Conditions</a> and <a href='#' className='text-primary underline'>Privacy Policy</a>.
										</p>
								</div>

								<p className='signup-form--login text-center'>Already have an account? <a href='#' className='text-primary underline'>Sign in</a></p>
						</div>
				)
		} else {
				signupFields = (
						<div>
								<select
										className='form-select my-16'
										name='gender'
										value={formData.gender}
										onChange={handleInputChange}
										>
										<option value='' disabled>Select gender</option>
										<option value='male'>Male</option>
										<option value='female'>Female</option>
										<option value='others'>Others</option>
								</select>
								{formValidation.gender !== '' &&
										<small className='invalid-feedback'>{formValidation.gender}</small>
								}

								<input
										type='date'
										className='form-input mb-16'
										name='date_of_birth'
										value={formData.date_of_birth}
										placeholder='Date of Birth'
										onChange={handleInputChange}
										 />
								{formValidation.date_of_birth !== '' &&
										<small className='invalid-feedback'>{formValidation.date_of_birth}</small>
								}

								<input
										type='password'
										className='form-input mb-16'
										name='password'
										value={formData.password}
										placeholder='Password'
										onChange={handleInputChange}
										 />
								{formValidation.password !== '' &&
										<small className='invalid-feedback'>{formValidation.password}</small>
								}

								<input
										type='password'
										className='form-input mb-16'
										name='password_confirmation'
										value={formData.password_confirmation}
										placeholder='Confirm Password'
										onChange={handleInputChange}
										/>
								{formValidation.password_confirmation !== '' &&
										<small className='invalid-feedback'>{formValidation.password_confirmation}</small>
								}
						</div>
				)
		}

		return (
				<div>

						{/* <Header /> */}

						<div className='container pt-6 pb-[150px] container-box bg-light auth-container grid grid-cols-2'>
								<BuyerSignupHero />
								<div className='shadow-md border rounded form-container'>
										<p className='text-headline-large text-on-surface'>{heading}</p>
										{subHeading !== '' &&
												<p className='text-body-small text-on-surface'>{subHeading}</p>
										}

										<form className='signup-form mt-40' onSubmit={handleSubmit}>
												<input
														type='text'
														name='username'
														className='form-input'
														value={formData.username}
														onChange={handleInputChange}
														placeholder='Enter email or phone number'/>

												{formValidation.username !== '' &&
														<small className='invalid-feedback'>{formValidation.username}</small>
												}
												{signupFields}
										</form>
								</div>
						</div>

				</div>
		);
}

export default SignUp;