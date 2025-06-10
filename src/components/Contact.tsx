import { useForm, ValidationError } from '@formspree/react';
import { useEffect, useState } from 'react';
import { getFormTagKey, getFormTagPlaceholder, type ContactTranslations } from '../locales';
import type { Topic } from '../utils/types';

const Contact = ({ setMessageSubmitted, setErrorOnSubmit, t }: { setMessageSubmitted: Function, setErrorOnSubmit: Function, t: ContactTranslations }) => {
  const [isNameValid, setNameValid] = useState<boolean | null>(null)
  const [isEmailValid, setEmailValid] = useState<boolean | null>(null)
  const [isMessageValid, setMessageValid] = useState<boolean | null>(null)
  const [topicsSelected, setTopicsSelected] = useState<Topic[]>(['other'])
  const topicsAvailable: Topic[] = ['partnership', 'work', 'feedback', 'bug', 'privacy', 'other']
  const [isTermsAccepted, setTermsAccepted] = useState<boolean | null>(null)
  const [isTopicRelevant, setIsTopicRelevant] = useState<boolean>(true)

  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORM_ENDPOINT, {})

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault()

      if (isNameValid === null) setNameValid(false)
      if (isEmailValid === null) setEmailValid(false)
      if (isMessageValid === null) setMessageValid(false)
      if (isTermsAccepted === null) setTermsAccepted(false)

      if (!isTopicRelevant && !isNameValid && !isEmailValid && !isMessageValid && !isTermsAccepted) {
        return
      }

      if (isTopicRelevant && isNameValid && isEmailValid && isMessageValid && isTermsAccepted) {
        handleSubmit(event)
      } else {
        setErrorOnSubmit(true)
      }
    } catch (error) {
      setErrorOnSubmit(true)
    }
  }

  useEffect(() => {
    const form = document.getElementById('form') as HTMLFormElement
    if (form && state.submitting === false && state.succeeded) {
      setMessageSubmitted(true)
      form.reset()
      setNameValid(null)
      setEmailValid(null)
      setMessageValid(null)
      setTermsAccepted(null)
    }
  }, [state.submitting])

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = event.target.value
    setNameValid(inputName.length >= 1)
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputEmail = event.target.value
    const regexRule = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    setEmailValid(inputEmail.length >= 1 && regexRule.test(inputEmail))
  }

  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputMessage = event.target.value
    setMessageValid(inputMessage.length >= 10)
  }

  const handleRelevantChange = () => setIsTopicRelevant(false)

  const handleTopicClick = (topic: Topic) => {
    const _topicsSelected = [...topicsSelected]
    if (_topicsSelected.includes(topic) && _topicsSelected.length > 1) {
      _topicsSelected.splice(_topicsSelected.indexOf(topic), 1)
    } else if (!_topicsSelected.includes(topic)) {
      _topicsSelected.push(topic)
    }
    setTopicsSelected(_topicsSelected)
  }

  return (
    <div className="w-full md:pt-10 h-fit">
      <h2 className="sr-only">{t.title}</h2>
      <fieldset>
        <legend className="px-2 text-accent text-lg font-semibold">{t.formTopicsLabel}</legend>
        <div className="pt-1 pb-5 w-full pl-0.5 flex flex-row gap-1 flex-wrap">
          {topicsAvailable.map((topic, index) => {
            const key = getFormTagKey(topic)
            return (
              <button
                key={index}
                type="button"
                aria-pressed={topicsSelected.includes(topic)}
                aria-label={`${t.ariaLabelTag}${t[key]}`}
                className={`cursor-pointer badge badge-secondary hover:badge-soft ${!topicsSelected.includes(topic) && 'badge-outline'}`}
                onClick={() => handleTopicClick(topic)}
              >
                {t[key]}
              </button>
            )
          })}
        </div>
      </fieldset>
      <form onSubmit={handleFormSubmit} id="form" noValidate>
        <input type="hidden" id="relevantTopic" onChange={handleRelevantChange} />
        <input type="hidden" name="topics" value={topicsSelected.toString()} readOnly />
        <div className="w-full flex flex-col md:flex-row md:justify-between md:gap-5">
          <div className="w-full flex flex-col">
            <label htmlFor="name" className="label">{t.formNameLabel}</label>
            <input
              id="name"
              type="text"
              name="name"
              className={`w-full input ${isNameValid === false ? 'input-error' : 'input-neutral'}`}
              placeholder={t.formNamePlaceholder}
              onChange={handleNameChange}
              aria-invalid={isNameValid === false}
              aria-describedby="name-error"
            />
            <p id="name-error" role="alert" className="text-error font-semibold text-sm py-1 pl-2 h-7">
              {isNameValid === false ? <>{t.formNameError}</> : null}
            </p>
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>

          <div className="w-full flex flex-col">
            <label htmlFor="email" className="label">{t.formEmailLabel}</label>
            <input
              id="email"
              type="email"
              name="email"
              className={`w-full input ${isEmailValid === false ? 'input-error' : 'input-neutral'}`}
              placeholder={t.formEmailPlaceholder}
              onChange={handleEmailChange}
              aria-invalid={isEmailValid === false}
              aria-describedby="email-error"
            />
            <p id="email-error" role="alert" className="text-error font-semibold text-sm py-1 pl-2 h-7">
              {isEmailValid === false ? <>{t.formEmailError}</> : null}
            </p>
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>
        </div>

        <label htmlFor="message" className="label">{t.formMessageLabel}</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={`w-full textarea ${isMessageValid === false ? 'textarea-error' : 'textarea-neutral'}`}
          placeholder={(topicsSelected).map(topic => {
            const key = getFormTagPlaceholder(topic)
            const placeholderText = t[key]
            return placeholderText.startsWith(',') ? placeholderText.substring(1) : placeholderText
          }).join('\n')}
          onChange={handleMessageChange}
          aria-invalid={isMessageValid === false}
          aria-describedby="message-error"
        />
        <p id="message-error" role="alert" className={`text-error font-semibold text-sm py-1 pl-2 h-7`}>
          {isMessageValid === false ? <>{t.formMessageError}</> : null}
        </p>
        <ValidationError prefix="Message" field="message" errors={state.errors} />

        <div className="flex flex-col gap-7 md:flex-row items-center md:justify-between mt-4">
          <div className="form-control w-full flex flex-col gap-0.5 md:flex-row justify-center items-center">
            <label htmlFor="checkbox" className="flex items-center gap-2">
              <input
                id="checkbox"
                type="checkbox"
                checked={!!isTermsAccepted}
                onChange={() => setTermsAccepted(!isTermsAccepted)}
                className={`checkbox checkbox-xs ${isTermsAccepted === false ? 'checkbox-error' : 'checkbox-neutral'}`}
                aria-invalid={isTermsAccepted === false}
                aria-describedby="terms-error"
              />
              <span>{t.formAgree}</span>
            </label>
            <a
              aria-label={t.ariaLabelOpenTerms}
              onClick={() => (document.getElementById('terms_modal') as HTMLDialogElement)?.showModal()}
              className="link link-primary pl-2 hover:text-th-p min-w-[135px]"
            >
              {t.formPrivacy}
            </a>
            {isTermsAccepted === false && (
              <p id="terms-error" role="alert" className="text-error text-sm mt-1">{t.formTermsError}</p>
            )}
          </div>

          <button
            type="submit"
            className={`btn btn-outline ${state.submitting ? 'btn-disabled' : 'btn-accent'} flex flex-row items-center`}
            disabled={state.submitting}
            aria-label={t.ariaLabelSend}
          >
            {t.formButton}
            <i className={`text-lg pl-2 pt-1 ${state.submitting ? 'bi bi-envelope-arrow-up-fill' : 'bi-envelope-fill'}`} />
          </button>
        </div>
      </form>
    </div>
  )
}

export default Contact
