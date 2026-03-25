/**
 * HatBanner — the hat funnel component.
 *
 * Customise the MESSAGE to fit your app's personality:
 *   "Part of randomorium.ai · Buy a holiday hat →"
 *   "Part of randomorium.ai · Hats for random people →"
 *
 * NEVER change the DESTINATION URL (shop.randomorium.ai).
 * All apps must point to the same shop.
 *
 * See PRODUCT_PLAYBOOK.md → "The Hat Hook Doctrine" for guidance.
 */
export default function HatBanner() {
  return (
    <a
      href="https://shop.randomorium.ai"
      target="_blank"
      rel="noopener noreferrer"
      className="block py-2 px-4 bg-black text-white text-center text-[13px] no-underline hover:bg-neutral-800 transition-colors"
    >
      Part of randomorium.ai &nbsp;·&nbsp; Buy a hat →
    </a>
  )
}
