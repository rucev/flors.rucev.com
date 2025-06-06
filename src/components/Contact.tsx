import { useForm, ValidationError } from '@formspree/react';
import { useEffect, useState } from 'react';



const Contact = ({ setMessageSubmitted, setErrorOnSubmit, toTerms }: { setMessageSubmitted: Function, setErrorOnSubmit: Function, toTerms: Function }) => {
  const [isNameValid, setNameValid] = useState<Boolean | null>(null);
  const [isEmailValid, setEmailValid] = useState<Boolean | null>(null);
  const [isMessageValid, setMessageValid] = useState<Boolean | null>(null);
  const [topicsSelected, setTopicsSelected] = useState(['other']);
  const topicsAvailable = ['partnership', 'work', 'content', 'feedback', 'bug', 'privacy', 'other'];
  const [isTermsAccepted, setTermsAccepted] = useState<Boolean | null>(null);

  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORM_ENDPOINT, {});

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (isNameValid === null) setNameValid(false)
    if (isEmailValid === null) setEmailValid(false)
    if (isMessageValid === null) setMessageValid(false)
    if (isTermsAccepted === null) setTermsAccepted(false)

    if (!isNameValid && !isEmailValid && !isMessageValid && !isTermsAccepted) {
      return
    }

    if (isNameValid && isEmailValid && isMessageValid && isTermsAccepted) {
      console.log('sending!', import.meta.env.VITE_FORM_ENDPOINT, event)
      handleSubmit(event)
      return
    } else setErrorOnSubmit(true)
  }

  useEffect(() => {
    const form = document.getElementById('form') as HTMLFormElement
    if (form && state.submitting === false && state.succeeded) {
      state.succeeded ? setMessageSubmitted(true) + form.reset() : setErrorOnSubmit(true)
      setNameValid(null)
      setEmailValid(null)
      setMessageValid(null)
      setTermsAccepted(null)
    }
  }, [state.submitting])

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const inputName = event.target.value

    if (inputName.length < 1) {
      setNameValid(false)
    } else {
      setNameValid(true)
    }
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const inputEmail = event.target.value
    const regexRule = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    if (inputEmail.length < 1 || !regexRule.test(inputEmail)) {
      setEmailValid(false)
    } else {
      setEmailValid(true)
    }
  };

  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    event.preventDefault()
    const inputMessage = event.target.value

    if (inputMessage.length < 10) {
      setMessageValid(false)
    } else {
      setMessageValid(true)
    }
  };

  const handleTopicClick = (topic: string) => {
    const _topicsSelected = [...topicsSelected]
    if (topicsSelected.includes(topic) && topicsSelected.length > 1) {
      _topicsSelected.splice(_topicsSelected.indexOf(topic), 1)
    }
    if (!topicsSelected.includes(topic)) _topicsSelected.push(topic)
    setTopicsSelected(_topicsSelected)
  }

  return (
    <div className="w-full md:pt-10">
      <p className="px-2 ml-2 font-semibold">
        {`topics`}
      </p>
      <div className="pt-1 pb-5 w-full pl-0.5 flex flex-row gap-1 flex-wrap">
        {
          (topicsAvailable).map((topic, index) => {
            return (
              <button
                key={index}
                type="button"
                aria-label={``}
                className={
                  `cursor-pointer badge badge-secondary hover:badge-soft ${!topicsSelected.includes(topic) && 'badge-outline'}`
                }
                onClick={() => handleTopicClick(topic)}
              >
                {topic}
              </button>
            )
          })
        }
      </div>
      <form onSubmit={handleFormSubmit} id="form" >
        <div className="hidden">
          <input
            id="topics"
            type="text"
            name="topics"
            value={topicsSelected.toString()}
            readOnly={true}
          />
        </div>
        <ValidationError
          prefix="Topics"
          field="topics"
          errors={state.errors}
        />
        <div className="w-full flex flex-col md:flex-row md:justify-between md:gap-5">
          <div className="w-full flex flex-col">
            <label htmlFor="name" className="label">
              text
            </label>
            <input
              id="name"
              type="text"
              name="name"
              className={`w-full input ${isNameValid === false ? 'input-error' : 'input-neutral'}`}
              placeholder={`name.placeholder`}
              onChange={(event) => handleNameChange(event)}
            />
            <div className="text-start pb-3">
              <p className="text-error font-semibold text-sm py-1 pl-2">
                {
                  isNameValid === false ?
                    <span>
                      <i className="bi bi-exclamation-triangle pr-2" />
                      {`name`}
                    </span> :
                    <span><i className="bi bi-square text-base-300"></i></span>
                }
              </p>
            </div>
            <ValidationError
              prefix="Name"
              field="name"
              errors={state.errors}
            />
          </div>
          <div className="w-full flex flex-col">
            <label htmlFor="email" className="label">
              {`email`}
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className={`w-full input ${isEmailValid === false ? 'input-error' : 'input-neutral'}`}
              placeholder={'form-email-placeholder'}
              onChange={(event) => handleEmailChange(event)}
            />
            <div className="text-start pb-3">
              <p className="text-error font-semibold text-sm py-1 pl-2">
                {
                  isEmailValid === false ?
                    <span>
                      <i className="bi bi-exclamation-triangle pr-2" />
                      {'form-email-error'}
                    </span> :
                    <span><i className="bi bi-square text-base-300"></i></span>
                }
              </p>
            </div>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
        </div>
        <label htmlFor="message" className="label">
          {'form-message-label'}
        </label>
        <div className="w-full">
          <textarea
            id="message"
            name="message"
            rows={4}
            className={`w-full textarea ${isMessageValid === false ? 'textarea-error' : 'textarea-neutral'}`}
            placeholder={(topicsSelected).map((topic) => {
              const placeholderText = `form-message-placeholder-${topic}`;
              return placeholderText.startsWith(',') ? placeholderText.substring(1) : placeholderText;
            }).join('\n')}
            onChange={(event) => handleMessageChange(event)}
          />
          <div className="text-start pb-3">
            <p className="text-error font-semibold text-sm py-1 pl-2">
              {
                isMessageValid === false ?
                  <span>
                    <i className="bi bi-exclamation-triangle pr-2" />
                    {'form-message-error'}
                  </span> :
                  <span><i className="bi bi-square text-base-300"></i></span>
              }
            </p>
          </div>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <div className="flex flex-col gap-2 md:flex-row items-center md:justify-between">
          <div className={`${isTermsAccepted === false ? 'text-error' : 'text-content'} flex flex-row items-center`}>
            <input checked={!!isTermsAccepted} id="checkbox" type="checkbox" className={`checkbox checkbox-xs ${isTermsAccepted === false ? 'checkbox-error' : 'checkbox-neutral'}`} onChange={() => setTermsAccepted(!isTermsAccepted)} />
            <label htmlFor="checkbox" className="label pl-2 pt-1">
              {'form-agree'}
              <a aria-label={'aria-label-open-terms'} onClick={() => toTerms(true)} target="_blank" className="underline hover:text-th-p">{'form-privacy'}</a>.
            </label>
            {
              (isTermsAccepted === false) &&
              <i className="pt-1.5 text-sm pl-2 bi bi-exclamation-triangle pr-2" />
            }
          </div>
          <button className={`btn btn-outline  ${state.submitting ? `btn-disabled` : `btn-success`} flex flex-row items-center`} type="submit" disabled={state.submitting} aria-label={'aria-label-send'}>
            {'form-button'}
            <i className={`text-lg pl-2 pt-1 ${state.submitting ? `bi bi-envelope-arrow-up-fill` : `bi-envelope-fill`}`} />
          </button>
        </div>
      </form>
    </div>
  )
}

export default Contact