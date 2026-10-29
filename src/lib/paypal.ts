/** Smile Again Families' PayPal merchant ID (public; it appears on their PayPal donate page). */
export const PAYPAL_MERCHANT = import.meta.env.PUBLIC_PAYPAL_MERCHANT_ID || 'H8ZJZFAJRZ7ZW';

const SITE = import.meta.env.SITE || 'https://smile-again.netlify.app';

type Gift = { amount?: number | string; monthly?: boolean; purpose?: string };

/**
 * A PayPal link with the gift already filled in.
 * Monthly gifts open a PayPal subscription checkout (amount and monthly schedule set, card or PayPal).
 * One-time gifts open PayPal's donate page with the amount and purpose filled in.
 */
export function paypalGiftUrl({ amount, monthly = false, purpose = 'Where it’s needed most' }: Gift = {}): string {
  const amt = amount ? String(amount).replace(/[^0-9.]/g, '') : '';
  const label = `Smile Again Families – ${purpose}`;
  const thanks = new URL('/thank-you', SITE).href;
  const back = new URL('/give', SITE).href;

  if (monthly && amt) {
    const p = new URLSearchParams({
      cmd: '_xclick-subscriptions', business: PAYPAL_MERCHANT, item_name: `Monthly gift: ${label}`,
      a3: amt, p3: '1', t3: 'M', src: '1', currency_code: 'USD', no_shipping: '1',
      return: thanks, cancel_return: back,
    });
    return `https://www.paypal.com/cgi-bin/webscr?${p}`;
  }
  const p = new URLSearchParams({ business: PAYPAL_MERCHANT, currency_code: 'USD', no_recurring: '0', item_name: label, return: thanks, cancel_return: back });
  if (amt) p.set('amount', amt);
  return `https://www.paypal.com/donate/?${p}`;
}
