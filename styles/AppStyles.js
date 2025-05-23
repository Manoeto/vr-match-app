import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  logo: {
    width: 180,
    height: 180,
    tintColor: '#f9f9f6',
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  ctaButton: {
    backgroundColor: '#0066cc',
    paddingVertical: 14,
    paddingHorizontal: 80,
    borderRadius: 14,
    marginBottom: 30,
  },
  ctaText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
  matchOptionsContainer: {
    alignItems: 'center',
  },
  matchButton: {
    backgroundColor: '#f25c54',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 10,
  },
  matchText: {
    color: '#fff',
    fontSize: 16,
  },
  backButton: {
    marginTop: 20,
    paddingVertical: 14,
    paddingHorizontal: 60,
    backgroundColor: '#ffffffaa',
    borderRadius: 10,
  },
  backText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  screenText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
});

export default styles;
