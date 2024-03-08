export interface CitySelectorProps {
  onSelectCity: ({ lat, lon }: { lat: number; lon: number }) => void;
}
